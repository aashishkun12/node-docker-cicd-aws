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
