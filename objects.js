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

console.log(userOne);