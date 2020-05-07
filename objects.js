const userOne = {
    name: 'Yoshi',
    email: 'yoshi@gmail.com',
    login(){
        console.log(this.email + ' You loggin !');
    },
    logout(){
        console.log(this.email + ' You loggout !');
    }
};

const userTwo = {
    name: 'Yoshi',
    email: 'yoshi@gmail.com',
    login(){
        console.log(this.email + ' You loggin !');
    },
    logout(){
        console.log(this.email + ' You loggout !');
    }
};

const userThree = {
    name: 'Ryu',
    email: 'Ryu@gmail.com',
    login(){
        console.log(this.email + ' You loggin !');
    },
    logout(){
        console.log(this.email + ' You loggout !');
    }
};

console.log(userOne);