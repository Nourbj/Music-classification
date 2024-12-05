pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    dir('Frontend') {
                        bat 'docker build -t front .'
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

        stage('Build vgg') {
            steps {
                script {
                    dir('vgg') {
                        bat 'docker build -t vgg19 .'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    // Login to Docker Hub using credentials stored in Jenkins
                    withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                    }

                    // Tag and push Docker images
                    bat 'docker tag front %DOCKER_USERNAME%/frontend:latest'
                    bat 'docker tag svm %DOCKER_USERNAME%/svm_image:latest'
                    bat 'docker tag vgg19 %DOCKER_USERNAME%/vgg19_image:latest'
                    bat 'docker push %DOCKER_USERNAME%/frontend:latest'
                    bat 'docker push %DOCKER_USERNAME%/svm_image:latest'
                    bat 'docker push %DOCKER_USERNAME%/vgg19_image:latest'
                }
            }
        }
    }

    post {
        success {
            echo 'All images built, deployed, and pushed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
