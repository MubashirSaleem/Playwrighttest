pipeline {
    agent any

    triggers {
        cron('H * * * *')
    }

    stages {
        stage('Run Job') {
            steps {
                // Your job steps here
                echo 'Running the job...'
            }
        }
    }
}
