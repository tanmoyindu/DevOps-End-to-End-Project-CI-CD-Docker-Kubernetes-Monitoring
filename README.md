# DevOps Microservice Project

A simple full-stack microservice project demonstrating **Docker, MongoDB, React, Flask, and CI/CD** using GitHub Actions.

## **Project Overview**

This project consists of three main components:

1. **Frontend:** React application running on port `3000`.
2. **Backend:** Flask API server running on port `5000`, fetching messages from MongoDB.
3. **Database:** MongoDB storing messages.

The frontend fetches the latest message from the backend, which reads it from the database.


## **Tech Stack**

- **Frontend:** React, JavaScript, Docker
- **Backend:** Flask, Python, Docker
- **Database:** MongoDB
- **DevOps:** Docker Compose, GitHub Actions (CI/CD)

- ## **Setup Instructions**

### **Clone the repository**

git clone <https://github.com/tanmoyindu/DevOps-End-to-End-Project-CI-CD-Docker-Kubernetes-Monitoring.git>


Start all services
docker-compose up --build


Frontend: http://localhost:3000

Backend: http://localhost:5000

MongoDB: mongodb://localhost:27017
