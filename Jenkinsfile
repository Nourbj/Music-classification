pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out the code'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Check Docker') {
            steps {
                script {
                    echo 'Checking Docker environment...'
                    sh '''
                    if ! command -v docker >/dev/null 2>&1; then
                        echo "Docker not installed or not in PATH"
                        exit 1
                    else
                        echo "Docker is installed"
                    fi
                    '''
                }
            }
        }

        stage('Build and Start Docker Compose') {
            steps {
                script {
                    echo 'Building and starting services with Docker Compose...'
                    sh 'docker-compose -f docker-compose.yml up --build -d'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    echo 'Pushing Docker images...'
                    sh 'docker-compose push'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment logic here
            }
        }
    }
}
