const names = require('./3-modules.js');
const say = require('./5-utils.js');
//console.log(names);

// say('bro');
// say(names.priya);
// say(names.pooja);

const data = require('./6-alternative-flavor.js');
console.log(data);
 require('./7-mind-grenade.js') 
//console.log(d);
const os =require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS =  {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)