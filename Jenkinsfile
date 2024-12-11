pipeline {
    agent any
    
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
                        sh 'docker build -t frontend .'
                    }
                }
            }
        }

        stage('Build SVM') {
            steps {
                script {
                    dir('SVM') {
                        // Remplacement de bat par sh pour Linux
                        sh 'docker build -t svm .'
                    }
                }
            }
        }

        stage('Build VGG') {
            steps {
                script {
                    dir('vgg') {
                        // Remplacement de bat par sh pour Linux
                        sh 'docker build -t vgg .'
                    }
                }
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    // Remplacement de bat par sh pour Linux
                    sh 'docker-compose up -d --build'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    // Remplacement de bat par sh pour Linux
                    sh 'docker-compose push'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app...'
                // Ajoutez votre logique de déploiement ici, par exemple, déployer sur un cloud ou un serveur distant
            }
        }
    }
}
