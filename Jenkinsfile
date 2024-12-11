pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'  
    }

    stages {
        stage('Checkout Code and repository') {
            steps {
                echo 'Checking out repository...'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Check Docker and Docker Compose Versions') {
            steps {
                bat 'docker --version' 
                bat 'docker-compose --version' 
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    echo 'Building and starting services with Docker Compose...'
                    bat 'docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --build' 
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    echo 'Pushing Docker images...'
                    bat 'docker-compose -f ${DOCKER_COMPOSE_FILE} push' // Pousse les images via Docker Compose
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app...'
            }
        }
    }
}
