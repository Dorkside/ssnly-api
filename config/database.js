module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: end("DATABASE_HOST"),
        port: end("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: { rejectUnauthorized: false },
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
