# Cloud Project I – Static Web Deployment with Docker

This project is a simple yet meaningful step into the world of cloud computing.  
I built and deployed a static website using **HTML**, **Tailwind CSS**, and **JavaScript**, then containerized it using **Docker** for local cloud simulation.

## About the Project

This project demonstrates:
- My foundational skills in web development (frontend)
- My ability to containerize a web app with Docker
- My commitment to learning cloud technologies, even without direct access to real cloud providers

**Goal**: To simulate deploying a web project in a cloud-like environment and prepare myself for real-world infrastructure in the future.

## Tech Stack

- HTML
- Tailwind CSS
- JavaScript
- Docker
- Nginx (as base image for serving)

## Folder Structure
cloud_project_1/ ├── public/ │   ├── index.html │   ├── about.html │   ├── 50x.html │   ├── script.js │   └── style.css (optional) ├── Dockerfile └── README.md

## How to Run This Project with Docker

1. Clone the repo:
   ```bash
   git clone https://github.com/username/cloud_project_1.git
   cd cloud_project_1

2. Build docker image
docker build -t cloud_project_1 .

3. run the container 
docker run -d -p 3000:80 cloud_project_1

4. Visit in browser:
http://localhost:3000

## Screenshots

Below are some screenshots of this project:

### Website Interface
![Website Interface](Screenshot/Screenshot from 2025-05-25 13-31-49.png)

### Docker Build Output
![Docker Build Output](Screenshot/Screenshot from 2025-05-25 12-57-36.png)

### Accessing the Website in Browser
![Website in Browser](Screenshot/Screenshot from 2025-05-25 13-46-14.png)
