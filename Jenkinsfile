pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out the code'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    
                    if (isUnix()) {
                        sh 'docker-compose -f docker-compose.yml up --build -d'
                    } else {
                        bat 'docker-compose -f docker-compose.yml up --build -d'
                    }
                }
            }
        }


        stage('Push Docker Images') {
            steps {
                script {
                    
                    if (isUnix()) {
                        sh 'docker-compose push'
                    } else {
                        bat 'docker-compose push'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                
                echo 'Deploying app...'
            }
}}
}