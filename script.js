// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// 1. Doctor's name
// 2. Specialty (Oncologist, pediatrician, etc...)
// 3. Address of practice

const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    };
};

console.log("Created Doctor", createDoctor("John Appleseed", "Oncologist", "301 Plus Park"));

/* 
    Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

    1. Pet name
    2. Pet breed
    3. Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels 
*/

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    };
};

let bowWowKennels = [];
bowWowKennels.push(createPet("Luna", "Hava Cavapoo"));
bowWowKennels.push(createPet("Skeeter", "Hava Cavapoo"));
bowWowKennels.push(createPet("Diego", "Labrador Retriever/American Staffordshire Terrier"));
console.log(bowWowKennels);