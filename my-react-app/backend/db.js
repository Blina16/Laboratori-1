const mysql = require('mysql2');

// Use connection pool instead of single connection to prevent "connection closed" errors
const pool = mysql.createPool({
  host: 'localhost',
  user: 'Blina',
  password: '1234567', // Updated to match VS Code settings
  database: 'lab111',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection error:', err);
    return;
  }
  console.log('✅ Database connected successfully!');
  connection.release(); // Release the connection back to the pool
});

// Export the pool with a promise wrapper for easier use
const db = {
  query: (sql, params) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};

module.exports = db;
