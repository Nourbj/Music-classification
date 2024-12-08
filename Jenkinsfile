
pipeline {
    agent any

    stages {
        stage('Checkout Code and repository') {
            steps {
                echo 'Checking out repository...'
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
        }

        stage('Build and Start Services with Docker Compose') {
            steps {
                script {
                    
                    if (isUnix()) {
                        sh 'docker-compose -f docker-compose.yml up --build -d'
                    } else {
                        bat 'docker-compose -f docker-compose.yml up --build -d'
                    }
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
                
                echo 'Deploying app...'
            }
        }
    }
}
}