module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "artisan",
  dialect: "mysql",
  port: 3307,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

/*module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: "mysql",
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};*/

