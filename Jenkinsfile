pipeline {
    agent any

    stages {
        stage('Checkout Code and repository') {
            steps {
                echo 'Checking out repository...'
                git branch: 'master', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }

        stage('Build frontend') {
            steps {
                script {
                    dir('Frontend/my-angular-app') {
                        bat 'docker build -t frontend . || exit 1'
                    }
                }
            }
        }

        stage('Build svm') {
            steps {
                script {
                    dir('SVM') {
                        bat 'docker build -t svm . || exit 1'
                    }
                }
            }
        }

        stage('Build vgg') {
            steps {
                script {
                    dir('vgg') {
                        bat 'docker build -t vgg . || exit 1'
                    }
                }
            }
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    bat 'docker-compose up -d || exit 1'
                }
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         script {
        //             // Run tests (e.g., inside the relevant service container)
        //             if (isUnix()) {
        //                 sh 'docker-compose exec <service_name> pytest tests/'
        //             } else {
        //                 bat 'docker-compose exec <service_name> pytest tests/'
        //             }
        //         }
        //     }
        // }

        stage('Push Docker Images') {
            steps {
                script {
                    // Login to Docker if necessary
                    bat 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD || exit 1'

                    // Push images to the Docker registry
                    bat 'docker-compose push || exit 1'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app...'
                // You can add actual deployment commands here (e.g., moving to production, deploying containers, etc.)
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}
