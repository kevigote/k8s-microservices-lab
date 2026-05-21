# Kubernetes Microservices Lab

Hands-on Kubernetes and DevOps lab environment built to practice real-world platform engineering concepts locally using Minikube.

This repository evolves progressively from Docker fundamentals to Kubernetes automation and CI/CD practices.

---

# Concepts Practiced

### Containerization

- Docker multi-stage builds
- Docker image tagging strategies
- GitHub Container Registry (GHCR)
- Docker context management

### Kubernetes

- Deployments
- Services
- ClusterIP networking
- Internal DNS communication
- NGINX reverse proxy
- Ingress Controller
- Secrets
- ConfigMaps
- Rollout strategies
- Pod networking

### DevOps / CI-CD

- GitHub Actions
- CI/CD separation
- Self-hosted GitHub Runner
- Image versioning using commit SHA
- Automated Kubernetes deployments
- Deployment validation
- Cluster health verification

---

# Architecture

```text
Developer
   ↓
Git Push

CI Pipeline
(GitHub Actions)
   ↓
Docker Build
   ↓
GHCR Push

CD Pipeline
(GitHub Actions)
   ↓
Kubernetes Deployment
   ↓

Ingress Controller
   ↓
frontend-service
   ↓
Frontend Pod (NGINX)
   ↓
backend-service
   ↓
Backend Pod (Node.js API)

```

---

# Technologies Used

- Docker
- Kubernetes
- Minikube
- GitHub Actions
- GitHub Container Registry (GHCR)
- NGINX
- Node.js
- Express.js
- Self-hosted GitHub Runner

---

# Project Structure

```text
k8s-microservices-lab/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── html/
│       └── index.html
│
├── k8s/
│   ├── backend-deployment.yml
│   ├── backend-service.yml
│   ├── frontend-deployment.yml
│   ├── frontend-service.yml
│   └── frontend-ingress.yml
│
└── README.md

```

---

# Prerequisites

Install:

- Docker Desktop
- Minikube
- kubectl
- Git

Verify installation:

```bash
docker --version

minikube version

kubectl version --client

git --version
```

---

# Start Local Cluster

Start Minikube:

```bash
minikube start --driver=docker
```

Enable ingress:

```bash
minikube addons enable ingress
```

Verify:

```bash
kubectl get pods -n ingress-nginx
```

---

# Configure Local Domain

Edit:

Windows:

```text
C:\Windows\System32\drivers\etc\hosts
```

Add:

```text
127.0.0.1 myapp.local
```

Verify:

```bash
ping myapp.local
```

---

# Deploy Kubernetes Resources

```bash
kubectl apply -f k8s/
```

Check:

```bash
kubectl get pods

kubectl get svc

kubectl get ingress
```

---

# Access Application

Frontend:

```text
http://myapp.local
```

Backend:

```text
http://myapp.local/api/message
```

Example:

```json
{
  "message": "Hello from backend API"
}
```

---

# CI/CD Flow

## CI Pipeline

Triggered on:

- main
- feature_microservice

Stages:

1. Checkout repository
2. Validate Docker context
3. Authenticate GHCR
4. Build backend image
5. Build frontend image
6. Push images to GHCR

---

## CD Pipeline

Triggered after CI success.

Stages:

1. Validate Kubernetes cluster
2. Apply manifests
3. Update image versions
4. Verify rollout
5. Validate ingress and pods

---

# Troubleshooting

Check cluster:

```bash
kubectl cluster-info

kubectl get nodes
```

Check pods:

```bash
kubectl get pods
```

Check logs:

```bash
kubectl logs <pod-name>
```

Check ingress:

```bash
kubectl describe ingress
```

Check services:

```bash
kubectl get svc
```

Check endpoints:

```bash
kubectl get endpoints
```

Check rollout:

```bash
kubectl rollout status deployment/backend-deployment

kubectl rollout status deployment/frontend-deployment
```

---

# Future Improvements

- Helm charts
- ArgoCD GitOps
- HTTPS / TLS
- PostgreSQL integration
- Horizontal Pod Autoscaler
- Prometheus monitoring
- Grafana dashboards
- Canary deployments
- Blue/Green deployments
- Environment promotion (Dev → QA → Prod)

---

# Learning Goals

This repository was built to practice production-oriented Kubernetes and DevOps workflows locally.

The objective is to progressively evolve from container fundamentals toward platform engineering concepts.
