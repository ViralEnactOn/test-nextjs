module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "knexdb",
    },
  },
  API_URL: "http://localhost:8080/api/",
};
