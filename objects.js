//with using Objects

var userOne = {
    email: 'roy@gmail.com',
    name: 'roy',

    //login: function() {}
    //in ES6 no need to use function keyword

    login() { console.log(this.email,'has logged in');},
    logout() { console.log(this.email, 'has logged out');}
};
var userTwo = {
    email: 'nimal@gmail.com',
    name: 'nimal',

    //login: function() {}
    //in ES6 no need to use function keyword

    login() { console.log(this.email,'has logged in');},
    logout() { console.log(this.email, 'has logged out');}
};

var userThree = {
    email: 'saman@gmail.com',
    name: 'saman',

    //login: function() {}
    //in ES6 no need to use function keyword

    login() { console.log(this.email,'has logged in');},
    logout() { console.log(this.email, 'has logged out');}
};

userThree.login();
userTwo.logout();

