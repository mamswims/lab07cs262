// Load environment variables from .env file
require('dotenv').config();

// Export configuration variables
module.exports = {
  dbConfig: {
    host: process.env.DB_SERVER,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  nodeEnv: process.env.NODE_ENV || 'development',
};
