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
                    bat 'docker-compose build'
                }
            }
        }
        stage('Run Containers') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }
        stage('Stop Containers') {
            steps {
                script {
                    bat 'docker-compose down'
                }
            }
        }
    }
}