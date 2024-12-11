pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    bat 'docker-compose build'
                }
            }
        }
        stage('Run Containers') {
            steps {
                script {
                    bat 'docker-compose up -d'
                }
            }
        }
        // Uncomment and modify if you need to stop the containers in the future
        // stage('Stop Containers') {
        //     steps {
        //         script {
        //             bat 'docker-compose down'
        //         }
        //     }
        // }
    }
}
