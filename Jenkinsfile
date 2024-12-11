pipeline {
    agent any

    stages {
        stage('Checkout Code and Repository') {
            steps {
                echo 'Checking out repository...'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }
        
        stage('Build Frontend') {
            steps {
                script {
                    dir('Frontend/my-angular-app') {
                        bat 'docker build -t frontend .'
                    }
                }
            }
        }

        stage('Build SVM Service') {
            steps {
                script {
                    dir('SVM') {
                        bat 'docker build -t svm .'
                    }
                }
            }
        }

        stage('Build VGG Service') {
            steps {
                script {
                    dir('vgg') {
                        bat 'docker build -t vgg .'
                    }
                }
            }
        }

        stage('Start Services with Docker Compose') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    // Push Docker images to the registry
                    bat 'docker-compose push'
                }
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying app...'
                // Add deployment steps here
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build failed! Investigate the issue.'
        }
    }
}
