import io
import os

from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
GOOGLE_DRIVE_ID = os.getenv("GOOGLE_DRIVE_ID")
IMAGES_DIR = os.getenv("IMAGES_DIR", "/app/media/images")


def main():
    drive = build("drive", "v3", developerKey=GOOGLE_API_KEY).files()

    # Create the output directory
    os.makedirs(IMAGES_DIR, exist_ok=True)

    # Retrieve a list of files in the shared drive
    files = (
        drive.list(
            q=f"'{GOOGLE_DRIVE_ID}' in parents",
        )
        .execute()
        .get("files", [])
    )

    # Download all files
    for file in files:
        nextFileContents = io.BytesIO()
        nextFileDone = False
        nextReq = drive.get_media(fileId=file["id"])

        print(f"Downloading {file['name']} ...")

        download = MediaIoBaseDownload(nextFileContents, nextReq)
        while not nextFileDone:
            _, nextFileDone = download.next_chunk()

        with open(f"{IMAGES_DIR}/{file['name']}", "wb") as f:
            f.write(nextFileContents.getvalue())


if __name__ == "__main__":
    main()
    print("Done.")
