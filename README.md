Developing:

```
podman build . -t spacez320/matthewandhilary:latest
podman run -v $(pwd):/usr/share/nginx/html/:Z --publish 8080:80 localhost/spacez320/matthewandhilary:latest
```

Deploying:

```
podman build . -t spacez320/matthewandhilary:latest
podman push spacez320/matthewandhilary:latest
kubectl delete pods --all --namespace matthewandhilary
kubectl apply -f kubernetes.yaml
```
