pipeline {
    agent any

    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Build Stage'
            }
        }
    }
}


   

