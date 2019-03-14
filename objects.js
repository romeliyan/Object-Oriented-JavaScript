//without using objects

var userOneEmail = 'roy@gmail.com';
var userOneNAme = 'roy';
var userOneFriends = ['nimal'];

var userTwoEmail = 'niaml@gmail.com';
var userTwoNAme = 'niaml';
var userTwoFriends = ['roy', 'mario'];

function login(email){
    console.log(email, 'is now logged in');
}

function logout(email){
    console.log(email, 'is now logged out');
}

function logFriends(friends){
   friends.forEach(friend => {
       console.log(friends);
   });
}

login(userOneEmail);