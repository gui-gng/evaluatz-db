module.exports = ({ env }) => {



  if (process.env.DATABASE_URL) {
    const databaseConfig = process.env.DATABASE_URL.split("//")[1];
    const [username, passwordAndDb, hostAndPort] = databaseConfig.split(":");
    const [password, host] = passwordAndDb.split("@");
    const [port, database] = hostAndPort.split("/");

    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          "settings": {
            "client": "postgres",
            host,
            port,
            username,
            password,
            database,
            schema: "public"
          },
          options: {
            useNullAsDefault: true
          }
        }
      }
    }
  }

};
