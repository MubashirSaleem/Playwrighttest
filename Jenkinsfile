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
                bat "\"${NVM_HOME}\\nvm.exe\" install ${NODE_VERSION}"
            }
        }

    }
}
