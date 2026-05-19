# Kubernetes Microservices Lab

This project is a hands-on Kubernetes and Docker lab environment used to practice:

- Docker multi-stage builds
- Kubernetes Deployments
- Kubernetes Services
- Internal DNS communication
- NGINX reverse proxy
- Ingress configuration
- Frontend and backend microservices architecture

---

# Architecture

```text
Browser
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
- NGINX
- Node.js
- Express.js
- Ingress NGINX Controller

---

# Project Structure

```text
k8s-microservices-lab/
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

Verify installation:

```bash
docker --version
minikube version
kubectl version --client
```

---

# Start Minikube

```bash
minikube start
```

Enable ingress:

```bash
minikube addons enable ingress
```

---

# Build Docker Images

## Backend

```bash
cd backend

docker build -t backend-api:v1 .
```

## Frontend

```bash
cd frontend

docker build -t frontend-app:v1 .
```

---

# Load Images into Minikube

```bash
minikube image load backend-api:v1

minikube image load frontend-app:v1
```

---

# Deploy Kubernetes Resources

```bash
cd k8s

kubectl apply -f .
```

---

# Verify Resources

## Pods

```bash
kubectl get pods
```

## Services

```bash
kubectl get svc
```

## Ingress

```bash
kubectl get ingress
```

---

# Configure Local Domain

Get Minikube IP:

```bash
minikube ip
```

Edit hosts file:

Windows:

```text
C:\Windows\System32\drivers\etc\hosts
```

Add:

```text
<MINIKUBE_IP> myapp.local
```

Example:

```text
192.168.49.2 myapp.local
```

---

# Access Application

Open browser:

```text
http://myapp.local
```

---

# Backend API Endpoint

```text
/api/message
```

Example response:

```json
{
  "message": "Hello from backend API"
}
```

---

# Kubernetes Concepts Practiced

- Deployments
- Services
- ClusterIP
- NodePort
- Ingress
- Internal DNS
- Reverse Proxy
- Pod Networking
- Multi-stage Docker Builds

---

# Troubleshooting

## Check pods

```bash
kubectl get pods
```

## Check logs

```bash
kubectl logs <pod-name>
```

## Check ingress

```bash
kubectl describe ingress
```

## Check services

```bash
kubectl get svc
```

## Check endpoints

```bash
kubectl get endpoints
```

---

# Future Improvements

- Add ConfigMaps
- Add Secrets
- Add MongoDB/PostgreSQL
- Add Helm charts
- Add HTTPS/TLS
- Add CI/CD pipelines
- Add monitoring with Prometheus/Grafana
- Add Horizontal Pod Autoscaler

---

# Learning Goals

This project was created to practice real-world Kubernetes and DevOps concepts in a local Minikube environment.# k8s-microservices-lab
