# 🚀 Node.js Docker Deployment on AWS EC2 with Nginx + GitHub Actions CI/CD

This project demonstrates a DevOps workflow where a Node.js application is containerized using Docker, deployed on an AWS EC2 Ubuntu instance, and exposed securely using Nginx as a reverse proxy. The deployment is automated using GitHub Actions CI/CD.

---

## 📦 Project Overview

This project includes:

- Node.js backend application
- Docker containerization
- AWS EC2 Ubuntu instance for hosting
- Nginx as a reverse proxy (only port 80 exposed)
- GitHub Actions for automated deployment (CI/CD)

---

## 🧩 Components

### 1. Node.js Application
A simple backend service running inside a Docker container.

---

### 2. Docker
Docker is used to containerize the application.

**Purpose:**
- Ensures consistency across development and production environments
- Simplifies deployment
- Isolates application from host system

---

### 3. AWS EC2 (Ubuntu Instance)
A cloud virtual machine used to host the application.

**Purpose:**
- Runs Docker containers
- Provides public access to the application via IP

---

### 4. Nginx (Reverse Proxy)
Nginx forwards requests from port **80** to the Node.js application running inside Docker (e.g., port 8000).

**Purpose:**
- Exposes only port 80 publicly (secure setup)
- Routes traffic to internal application port

---
### 🔐 SSH Key Setup (EC2 + GitHub Actions)

```bash
ssh-keygen -t ed25519
```

Add Private key to Github Secret and Public Key to EC2

```bash
scp -i your-ec2-key.pem id_ed25519.pub ubuntu@<ec2-ip>:/tmp/
```

```bash
cat id_ed25519.pub >> ~/.ssh/authorized_keys
```

---
### 🚀 Git Tags & Release Workflow

This project uses **Git tags** for versioning releases (e.g., v1.0, v1.1, v2.0).  
Each tag represents a stable release that can be deployed via CI/CD.

---

## 📌 Create a new release (tag)

After making changes:

```bash
git add .
git commit -m "New feature"
git tag -a v1.1 -m "Release v1.1"
git push origin main
git push origin v1.1
```

#### Common Commands

1. List all tags

```bash
git tag
```

2. List tags with pattern:

```bash
git tag -l "v*"
```
3. Delete a tag (local)

```bash
git tag -d v1.1
```

4. Delete a tag (remote)

```bash
git push origin --delete v1.1
```
