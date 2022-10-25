const pwd = require('./pwd');
const cmd = data => {};

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); //remove the newline

  if (cmd === 'pwd') {
    pwd(cmd);
  }

  process.stdout.write('You typed: ' + cmd);

  process.stdout.write('\nprompt > ');
});
