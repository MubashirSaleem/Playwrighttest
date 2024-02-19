pipeline {
    agent any

    triggers {
        cron('H * * * *')
    }

    stages {
        stage('Run Job') {
            steps {
                // Checkout your code repository if needed
                // git 'your_repository_url'

                // Install npm dependencies

                // Run npm start
                sh 'npm run start'
            }
        }
    }
}
