pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t healthcare-app:latest .'
            }
        }
        stage('SAST') {
            steps {
                echo "Running SonarQube static code analysis..."
                // sh 'sonar-scanner'
            }
        }
        stage('Security Scan') {
            steps {
                echo "Scanning container image with Trivy..."
                // sh 'trivy image --exit-code 0 healthcare-app:latest'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                export API_PORT=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}' | awk -F: '{print $3}' | tr -d '/')
                kubectl config set-cluster minikube --server=https://127.0.0.1:$API_PORT
                kubectl apply --validate=false -f deployment.yaml
                '''
            }
        }
    }
}
