pipeline {
    agent any

    triggers {
        cron('H * * * *')
    }

    environment {
        NODE_VERSION = '14.17.0'
        NVM_DIR = "$HOME/.nvm"
    }

    stages {
       stage('Setup') {
            steps {
                // Install nvm
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash'

                // Load nvm
                sh 'export NVM_DIR="$HOME/.nvm"'
                sh '[ -s "$NVM_DIR/nvm.sh" ] && /. "$NVM_DIR/nvm.sh"'

                // Install Node.js
                sh "nvm install ${env.NODE_VERSION}"
            }
        }

    }
}
