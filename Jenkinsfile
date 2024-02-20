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

    //     - name: Install dependencies
    //   run: npm ci
    // - name: Install Playwright Browsers
    //   run: npx playwright install --with-deps
    // - name: Run Playwright tests
    //   run: npx playwright test
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

        stage('Install Playwright Browsers') {
            steps {
                bat "npx playwright install --with-deps"
            }
        }

        stage('Run Playwright tests') {
            steps {
                bat "npm run start"
                // bat "npx playwright test ./login.spec.js --project chromium --headed"
            }
        }

    }
}
