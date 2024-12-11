pipeline {
    agent { label 'windows' }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out the code'
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

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    bat 'docker-compose up -d --build'
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
                // Add your deploy logic here, e.g., deploy to a cloud or remote server
            }
        }
    }
}
