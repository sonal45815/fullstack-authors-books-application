# Learn It Right Way
This project is a full-stack web application built using React js for the frontend, Express js for the backend, and MySQL as the database. The application is designed to demonstrate the implementation of a 3-tier architecture, where the presentation layer (React js), application logic layer (Express js), and data layer (MySQL) are separated into distinct tiers.


## User Interface Screenshots 


#### Books
![Dashboard](./frontend/public/ss/books.png)

#### Authors
![Dashboard](./frontend/public/ss/authors.png)

## Setting up the Presentation Tier

# conncet to your  front end instance
#### Install GIT
```
sudo apt update && sudo apt upgrade -y
sudo apt install git -y
git --version
sudo apt install -y docker.io
sudo systemctl status docker
sudo systemctl start docker
sudo systemctl enable docker
```

#### Install node.js
1. To install node version manager (nvm)
```
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
```
### Install httpd (apache)
```
sudo apt install apache2 -y
sudo systemctl start apache2
sudo systemctl enable apache2
sudo ufw allow 'Apache Full'
```
#### Clone repository
```
https://github.com/sonal45815/fullstack-authors-books-application.git
```
###Switch to frontend
```
cd fullstack-authors-books-application
cd frontend
```
### In frontend path .env file is there if not existis please create .env file 
```
VITE_API_URL=http://3.85.56.86/api   // put your backend public ip or dns name 
```
#### Run the following commnads in frontend 
```
npm install
npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl restart apache2

```

### Now access the frontend with public ip 

# Setting up the Data Tier

```
sudo apt update
sudo apt install -y mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
sudo systemctl status mysql
sudo mysql_secure_installation
```

#### Install node.js
1. To install node version manager (nvm)
```
sudo apt update && sudo apt upgrade -y
sudo apt install git -y
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
pm2 --version
```
### Install pm2
```
sudo npm install -g pm2
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$HOME/.npm-global/bin:$PATH"
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
npm install -g pm2
```
### Install mysql or mariadb for database initilization
```
sudo yum install mariadb105-server -y
sudo apt install mariadb-server -y
sudo systemctl start mariadb
sudo systemctl enable mariadb
sudo mysql_secure_installation  # Secure it
```
#### Clone repository
```
git clone https://github.com/sonal45815/fullstack-authors-books-application.git
```
### Switch to backend
```
cd fullstack-authors-books-application
cd backend
```
### change the database details  in db.js
### *** vi configs/db.js***
```
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql',
  port: 3306,
  user: 'sonal',
  password: 'Sonal@45815',
  database: 'react_node_app'
});

module.exports = db;
```
### Initilize the database 
```
mysql -u sonal -p react_node_app < db.sql

```
### Everything is completed run the follwing commnds for backend execution
```
sudo kubectl apply -f mysql.yaml
sudo docker build -t backend .
docker login
docker tag frontend:latest sonal45815/frontend-app:latest
docker push sonal45815/frontend-app:latest
sudo usermod -aG docker $USER
newgrp docker
docker ps
docker tag frontend:latest sonal45815/frontend-app:latest
docker push sonal45815/frontend-app:latest
```

### k3s installation and ArgoCD installation
```
curl -sfL https://get.k3s.io | sh -
sudo kubectl get nodes
sudo kubectl get pods -A

sudo kubectl create namespace argocd
sudo kubectl apply --server-side -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

sudo kubectl port-forward svc/argocd-server -n argocd 8080:443
https://localhost:8080

#username: admin
#password: sudo kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo 
```

### hit public ip you will get this responce 
#### Dashboard
![Dashboard](./frontend/public/ss/dashboard.png)

### add the autors and books 
                                                   thank you 

