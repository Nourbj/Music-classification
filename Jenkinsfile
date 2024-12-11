pipeline {
    agent any

    stages {
        stage('Checkout Code and Repository') {
            steps {
                echo 'Checking out repository...'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }
        
        stage('Build frontend') {
            steps {
                script {
                    dir('Frontend/my-angular-app') {
                        bat 'docker build -t frontend .'
                    }
                }
            }
        }

        stage('Build SVM') {
            steps {
                script {
                    dir('SVM') {
                        bat 'docker build -t svm .'
                    }
                }
            }
        }

        stage('Build VGG') {
            steps {
                script {
                    dir('vgg') {
                        bat 'docker build -t vgg .'
                    }
                }
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    bat 'docker-compose push'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app...'
                // Add actual deploy steps here, e.g., pushing to a cloud platform or server
            }
        }
    }
}
