pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out the code'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    echo 'Building Docker Images'
                    // Ensure docker-compose command works on Windows
                    bat 'docker-compose --version' // To check if docker-compose is available
                    bat 'docker-compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    echo 'Running Containers'
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Stop Containers') {
            steps {
                script {
                    echo 'Stopping Containers'
                    bat 'docker-compose down'
                }
            }
        }
    }
}
