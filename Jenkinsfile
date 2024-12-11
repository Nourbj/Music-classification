pipeline {
    agent any

    stages {
        stage('Checkout Code and Repository') {
            steps {
                echo 'Checking out repository...'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Check Docker Environment') {
            steps {
                script {
                    echo 'Checking Docker installation and environment...'
                    // Check Docker and Docker Compose versions
                    if (isUnix()) {
                        sh '''
                        docker --version || { echo "Docker not installed or not in PATH"; exit 1; }
                        docker-compose --version || { echo "Docker Compose not installed or not in PATH"; exit 1; }
                        '''
                    } else {
                        bat '''
                        docker --version || exit /b 1
                        docker-compose --version || exit /b 1
                        '''
                    }
                }
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    echo 'Building and starting services with Docker Compose...'
                    // Run docker-compose with error handling
                    if (isUnix()) {
                        sh '''
                        docker-compose -f docker-compose.yml up --build -d || { 
                            echo "Docker Compose failed."; exit 1; 
                        }
                        '''
                    } else {
                        bat '''
                        docker-compose -f docker-compose.yml up --build -d || exit /b 1
                        '''
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    echo 'Pushing Docker images to registry...'
                    // Push images to Docker registry
                    if (isUnix()) {
                        sh '''
                        docker-compose push || { 
                            echo "Failed to push Docker images."; exit 1; 
                        }
                        '''
                    } else {
                        bat '''
                        docker-compose push || exit /b 1
                        '''
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add deployment logic here
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for more details.'
        }
    }
}
