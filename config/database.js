module.exports = ({ env }) => {


  let options = {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host:'localhost',
          port:5432,
          username:'GNG',
          password:'',
          database: 'evaluatz',
          schema: "public"
        },
        options: {
          useNullAsDefault: true
        }
      }
    }
  };

  if (process.env.DATABASE_URL) {
    const databaseConfig = process.env.DATABASE_URL.split("//")[1];
    const [username, passwordAndDb, hostAndPort] = databaseConfig.split(":");
    const [password, host] = passwordAndDb.split("@");
    const [port, database] = hostAndPort.split("/");
    options = {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
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
    };

    console.log(JSON.stringify(options));
  }

  console.log(JSON.stringify(options));
  return options;

};
