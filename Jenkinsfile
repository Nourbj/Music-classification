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
                        if (isUnix()) {
                            sh 'docker build -t frontend .'
                        } else {
                            bat 'docker build -t frontend .'
                        }
                    }
                }
            }
        }

        stage('Build SVM') {
            steps {
                script {
                    dir('SVM') {
                        if (isUnix()) {
                            sh 'docker build -t svm .'
                        } else {
                            bat 'docker build -t svm .'
                        }
                    }
                }
            }
        }

        stage('Build VGG') {
            steps {
                script {
                    dir('vgg') {
                        if (isUnix()) {
                            sh 'docker build -t vgg .'
                        } else {
                            bat 'docker build -t vgg .'
                        }
                    }
                }
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker-compose up -d'
                    } else {
                        bat 'docker-compose up -d'
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
                // Add actual deploy steps here, e.g., pushing to a cloud platform or server
            }
        }
    }
}
