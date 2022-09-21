"use strict";
class Myclass {
    showName(uname, email) {
        console.log('Welcome to TS' + uname + '' + email);
    }
}
let classDemo = new Myclass();
classDemo.showName('admin', 'aa@hj.com');
