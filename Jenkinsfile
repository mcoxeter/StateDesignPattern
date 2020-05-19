pipeline {
    agent { 
        docker { 
            label 'docker'
            image 'node:10.13' 
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
