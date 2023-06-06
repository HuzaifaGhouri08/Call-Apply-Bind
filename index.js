let user1 = { 
  name: 'Huzaifa',
  Profession: 'Devloper',
 };

 let user2 ={
   name : 'Taha',
   Profession : 'Arcitucture',
 }

 let user3 ={
  name : 'Mustufa',
  Profession : 'Self Employeed',
}

// Generic and Depandant Function. 
let print = function(cast, text){
console.log(`${this.name} ${cast} ${text} ${this.Profession}`)
}

// Call Method 
print.call(user1, "Ghouri", "professionally")

// Apply Method
print.apply(user2,["hashmi", 'by Proffesion'])

// Bind Method
let suppose = print.bind(user3, "Gulam", "professionally")
suppose();
