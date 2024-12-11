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
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Stop Containers') {
            steps {
                script {
                    sh 'docker-compose down'
                }
            }
        }
    }
}
