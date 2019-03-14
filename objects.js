//with using classes and objects

class User {
    //first thing -> create a constructor
    //responsible for creating new users

    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

}

    var userOne = new User('roy@gmail.com','roy');
    var userTwo = new User('kamal@gmail.com','kamal');

    console.log(userOne);
    console.log(userTwo);

    //new keyword

    // creates a new empty object {}
    // sets the value of 'this' to be the new empty object
    // calls the constructor method

