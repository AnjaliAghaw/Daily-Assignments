var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Myclass.prototype.showName = function (uname, email) {
        console.log('Welcome to TS' + uname + '' + email);
    };
    return Myclass;
}());
var classDemo = new Myclass();
classDemo.showName('admin', 'aa@hj.com');
