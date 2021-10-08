require('dotenv').config()

const config = {
  app: {
    environment: process.env.ENVIRONMENT || 'homolog',
    host: process.env.API_HOST,
    port: process.env.API_PORT,
    combinedLogPathFile: process.env.COMBINED_LOG_PATH_FILE,
    errorLogPathFile: process.env.ERROR_LOG_PATH_FILE
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
  }
}

module.exports = config
