pipeline {
    agent { label 'windows' }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Build with Docker Compose') {
            steps {
                script {
                    // Use Docker Compose to build all services defined in the docker-compose.yml file
                    bat 'docker-compose build'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Use Docker Compose to bring up the containers in detached mode
                    bat 'docker-compose up -d'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    // Authenticate Docker login using credentials stored in Jenkins
                    withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                    }

                    // Push Docker images to the repository
                    bat 'docker-compose push'
                }
            }
        }
    }

    post {
        success {
            echo 'All services built, deployed, and pushed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
