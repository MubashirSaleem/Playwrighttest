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
       stage('Setup') {
            steps {
                // Download and install Node.js
                bat "node -v"
                // bat "\"${NVM_HOME}\\nvm.exe\" install ${NODE_VERSION}"
            }
        }

        // stage('Build') {
        //     steps {
        //         // Checkout your code repository
        //         // bat 'git clone your_repository_url'

        //         // Use the installed Node.js version
        //         bat "\"${NVM_HOME}\\nvm.exe\" use ${NODE_VERSION}"

        //         // Install npm dependencies
        //         // bat 'npm install'

        //         // Run your build script
        //         bat 'npm run start'
        //     }
        // }

    }
}
