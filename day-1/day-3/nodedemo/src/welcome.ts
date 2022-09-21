class Myclass{

    showName(uname:string,email:string){
        console.log('Welcome to TS' +uname+''+email);
    }
}

let classDemo = new Myclass();
classDemo.showName('admin','aa@hj.com')