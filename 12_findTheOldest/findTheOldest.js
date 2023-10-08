const findTheOldest = function(people) {

  const date = new Date();
  const currentYear = date.getFullYear();

  let oldest = people[0];
  let oldestAge = 0;

  for (let i = 0; i < people.length; ++i) {

    let age = 0;
    if (people[i].yearOfDeath == null) {
      age = currentYear - people[i].yearOfBirth;
    } else {
      age = people[i].yearOfDeath - people[i].yearOfBirth;
    }
    
    if (age > oldestAge) {
      oldestAge = age;
      oldest = people[i];
    }

  }
  return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
