module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java",
      args: "-jar lostlink-config-server/target/lostlink-config-server-0.0.1-SNAPSHOT.jar",
      autorestart: true
    },
    {
      name: "eureka-server",
      script: "java",
      args: "-jar lostlink-eureka-server/target/lostlink-eureka-server-0.0.1-SNAPSHOT.jar",
      autorestart: true
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-jar lostlink-api-gateway/target/lostlink-api-gateway-0.0.1-SNAPSHOT.jar",
      autorestart: true
    }
  ]
};

