pipeline {
    agent any

    triggers {
        cron('H * * * *')
    }

    environment {
        NODE_VERSION = '14.17.0'
        NVM_HOME = "C:\\Program Files\\nodejs"
    }

    stages {
       stage('Check Node js Version') {
            steps {
                bat "node -v"
                // Download and install Node.js
                // bat "\"${NVM_HOME}\\nvm.exe\" install ${NODE_VERSION}"
            }
        }

        stage('Install dependencies') {
            steps {
                bat "npm install"
            }
        }

        stage('Start Test') {
            steps {
                // Checkout your code repository
                // bat 'git clone your_repository_url'

                // Use the installed Node.js version
                // bat "\"${NVM_HOME}\\nvm.exe\" use ${NODE_VERSION}"

                // Install npm dependencies
                // bat 'npm install'

                // Run your build script
                bat 'npm run start'
            }
        }

    }
}
