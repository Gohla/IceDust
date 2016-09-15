node{
  stage 'Build and Test'
  checkout scm
  sh 'echo "QUALIFIER=$(date +%Y%m%d%H%M)" > build_env'
  withMaven(
    mavenLocalRepo: '.repository',
    mavenSettingsConfig: 'org.jenkinsci.plugins.configfiles.maven.MavenSettingsConfig1430668968947',
    mavenOpts: '-Xmx1024m -Xss16m'
  ){
    // Run the maven build
    sh "mvn clean verify -B"
  }
}
