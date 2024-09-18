

const { log } = require('console');
const os = require('os');
const { start } = require('repl');

console.log('My first app');
// console.log(`File Name: ${__filename}`);
// console.log(`Directory Name: ${__dirname}`);

console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(os.cpus());
console.log(`Free System Memory: ${os.freemem()}`);
console.log(`Total memory: ${os.totalmem()}`);
console.log(`Host Name: ${os.hostname()}`);
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`Type: ${os.type()}`);
console.log(`Uptime: ${os.uptime()}`);
console.log("User Information:");
console.log(os.userInfo());

console.log("================Global Objects==============");
   console.log(global);
   console.log(console);
   console.log(process);
   console.log(__filename);
   console.log(__dirname);
   console.log(module);









