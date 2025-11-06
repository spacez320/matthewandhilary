Developing:

```
podman network create matthewandhilary

podman build . -t spacez320/matthewandhilary:latest
podman build -f Dockerfile.backend . -t spacez320/matthewandhilary-slideshow:latest

podman run -v $(pwd):/usr/share/nginx/html/:Z --name frontend --publish 8080:80 --replace --network matthewandhilary localhost/spacez320/matthewandhilary:latest
podman run -v $(pwd):/app/:Z --name backend --publish 8081:8081 --replace --network matthewandhilary localhost/spacez320/matthewandhilary-slideshow:latest
```

Deploying:

```
podman build . -t spacez320/matthewandhilary:latest
podman push spacez320/matthewandhilary:latest
kubectl delete pods --all --namespace matthewandhilary
kubectl apply -f kubernetes.yaml
```
