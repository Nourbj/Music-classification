pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
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
            }
        }
    }

   
}
