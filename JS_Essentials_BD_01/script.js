// Fundamentals of Javascripts:
// arrays and objects
// functions return
// async js coding
// foreach, map ,filter, find, indexOf

// forEach Loop
var arr = [1,2,3,4 ];
arr.forEach(function(val){
    console.log(val + " Hello");
})

// map
var newarr=arr.map(function(val){
   return val*3; 

})
console.log(newarr)

// filter
var ans=arr.filter(function(val){
    if(val > 3){
        return true;
    }
    else return false;
    return 
})
console.log(ans);

// find
var ans2=arr.find(function(val){
    if(val ===2) return val;
})
console.log(ans2);

// Objects{}
var obj={
    name: "Waheed",
    age: 12
}
Object.freeze(obj);
obj.age=25;

// function
function abcd(){
    return"hello world";
}


var ans= abcd();

// 
async function abcd(){
   var blob =await fetch(`https://randomuser.me/api/`);
   var ans3 = await blob.json();
   console.log(ans3.reults) 
}
abcd();


async function getUsers() {
    // API سے users کا data لیں
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();

    // صرف وہ users جن کی عمر 30 سے زیادہ ہے
    const filteredUsers = data.users.filter(function(user) {
        return user.age > 30;
    });

    // ہر user کو دکھائیں
    filteredUsers.forEach(function(user) {
        console.log(user.firstName + " - Age: " + user.age);
    });
}

getUsers();


