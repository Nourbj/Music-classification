pipeline {
    agent { label 'linux' }  // Utilise un agent avec le label 'linux'

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
                        sh 'docker build -t frontend .'  // Utilise sh au lieu de bat pour Linux
                    }
                }
            }
        }

        stage('Build SVM') {
            steps {
                script {
                    dir('SVM') {
                        sh 'docker build -t svm .'  // Utilise sh au lieu de bat pour Linux
                    }
                }
            }
        }

        stage('Build VGG') {
            steps {
                script {
                    dir('vgg') {
                        sh 'docker build -t vgg .'  // Utilise sh au lieu de bat pour Linux
                    }
                }
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d --build'  // Utilise sh au lieu de bat pour Linux
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    sh 'docker-compose push'  // Utilise sh au lieu de bat pour Linux
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app...'
                // Ajoutez votre logique de déploiement ici, par exemple, pour déployer sur un serveur cloud ou distant
            }
        }
    }
}
