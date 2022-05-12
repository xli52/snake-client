const net = require("net");
const { IP, PORT, NAME } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Log the message from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully Connected!');
    conn.write(`Name: ${NAME}`);
  });

  return conn;
};

module.exports = {connect};