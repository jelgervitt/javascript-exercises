const findTheOldest = function(people) {
    // go through the array, and find the oldest person
    people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, oldest.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
    return people[1];
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
