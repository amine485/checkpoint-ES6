//array
const pets = [                                            
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

//age
const getAge=(pet)=>{return new Date().getFullYear() - pet.bornOn ; }
// forEach  pet age
let petsWithAge = []; 
pets.forEach(pet => {
  pet.age = getAge(pet);
  petsWithAge.push(pet);
})
console.log(petsWithAge)

//filter cat
let dogs = []; 
pets.filter(pet => {if (pet.type === `dog`) { dogs.push(pet);
  }});
console.log(dogs);

//find jasper
pets.find(pet => { 
 if (pet.name === `Jasper`) {
 jasper = pet;
  }});
//jasper is 4 years old
console.log(`Jasper is ${jasper.age} years old`);
