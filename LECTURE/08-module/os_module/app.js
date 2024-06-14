const os = require('os');
// console.log(os);
// console.log(os.totalmem());

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`total memory: ${totalMemory}`);
console.log(`free memory: ${freeMemory}`);