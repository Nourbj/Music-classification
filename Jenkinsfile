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
                    if (isUnix()) {
                        sh '''
                        if ! command -v docker >/dev/null 2>&1; then
                            echo "Docker not installed or not in PATH"
                            exit 1
                        fi
                        '''
                    } else {
                        bat '''
                        where docker || (
                            echo Docker not installed or not in PATH
                            exit 1
                        )
                        '''
                    }
                }
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    echo 'Building and starting services with Docker Compose...'
                    if (isUnix()) {
                        sh 'docker-compose -f docker-compose.yml up --build -d'
                    } else {
                        bat 'docker-compose -f docker-compose.yml up --build -d'
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    echo 'Pushing Docker images to registry...'
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
                echo 'Deploying the application...'
            }
        }
    }
}
