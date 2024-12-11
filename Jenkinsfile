pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Nourbj/Music-classification.git', changelog: false, poll: false
            }
        }
    }
}
