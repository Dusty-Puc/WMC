'use strict'

function generate_pw(){
const letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let pw ='';

   for (let index = 0; index < 8; index++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    pw = pw + letters[randomIndex];
}
    

return pw
}

module.exports=generate_pw

console.log(generate_pw());