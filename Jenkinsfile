// pipeline {
//     agent any

//     environment {
//         // Define environment variables if necessary
//         NAME = ""
//         VERSION = ""
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 echo 'Building the project...'
//                 // Compile and build the project using Maven
//                 sh 'mvn clean install'
//             }
//         }

//         stage('Test') {
//             steps {
//                 echo 'Running tests...'
//                 // Run the tests
//                 sh 'mvn test'
//             }
//         }

//         stage('Package') {
//             steps {
//                 echo 'Packaging the application...'
//                 // Package the application (JAR, WAR, etc.)
//                 sh 'mvn package'
//             }
//         }

//         stage('Extract Project Info') {
//             steps {
//                 echo 'Extracting project name and version from pom.xml...'
//                 // Extract the project name and version from the pom.xml
//                 script {
//                     NAME = sh(script: "mvn -q -DforceStdout help:evaluate -Dexpression=project.name", returnStdout: true).trim()
//                     VERSION = sh(script: "mvn -q -DforceStdout help:evaluate -Dexpression=project.version", returnStdout: true).trim()
//                 }
//                 echo "Project Name: ${NAME}"
//                 echo "Project Version: ${VERSION}"
//             }
//         }

//         stage('Deliver') {
//             steps {
//                 echo 'Delivering the application...'
//                 // Run the JAR file directly
//                 sh "java -jar target/${NAME}-${VERSION}.jar"
//             }
//         }
//     }

//     post {
//         always {
//             echo 'Cleaning up...'
//             // Optional: Add any cleanup steps here
//         }
//         success {
//             echo 'Pipeline completed successfully!'
//         }
//         failure {
//             echo 'Pipeline failed.'
//         }
//     }
// }




pipeline {
    agent any

    environment {
        NAME = ''
        VERSION = ''
    }

    stages {
        stage('Build') {
            steps {
                echo '🏗️ Building the project...'
                bat 'mvn clean install -DskipTests'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                bat 'mvn test'
            }
        }

        stage('Package') {
            steps {
                echo '📦 Packaging the application...'
                bat 'mvn package'
            }
        }

        stage('Extract Project Info') {
            steps {
                echo '📄 Extracting project info from pom.xml...'
                script {
                    NAME = bat(script: 'mvn -q -DforceStdout help:evaluate -Dexpression=project.name', returnStdout: true).trim()
                    VERSION = bat(script: 'mvn -q -DforceStdout help:evaluate -Dexpression=project.version', returnStdout: true).trim()
                }
                echo "Project Name: ${NAME}"
                echo "Project Version: ${VERSION}"
            }
        }

        stage('Run Jar') {
            steps {
                echo '🚀 Running the built application...'
                bat "java -jar target\\${NAME}-${VERSION}.jar"
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
        always {
            echo '🧹 Cleaning up workspace...'
        }
    }
}
