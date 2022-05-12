let connection;

//Set up user input
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '1') {
    connection.write('Say: Weeee!');
  }

  if (key === '2') {
    connection.write('Say: Suuup!');
  }

  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  
};

module.exports = { setupInput };