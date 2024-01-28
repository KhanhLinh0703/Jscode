const checkDogs = (dogsJulia, dogsKate) => {
    const allDogs = [...dogsJulia, ...dogsKate];
    const copiedDogsJulia = dogsJulia.slice(2);
    const dogsWithoutFirstAndLastTwo = copiedDogsJulia.slice(0, -2);
    console.log(dogsWithoutFirstAndLastTwo);
    const copiedallDogs = [...dogsKate, ...dogsWithoutFirstAndLastTwo];

    copiedallDogs.forEach((dogAge, index) => {
        const dogStatus = dogAge >= 3 ? 'trưởng thành' : 'chó con';
        console.log(`Chó ${index + 1} là chó ${dogStatus} với tuổi là ${dogAge} tuổi.`);
    });
};
const calcAverageHumanAge = (ages) => {
    const adultHumanAges = ages.filter(age => age > 18);
    const humanAges = adultHumanAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    const averageHumanAge = humanAges.reduce((sum, age) => sum + age, 0) / humanAges.length;
    return averageHumanAge;
};

const dogsJulia = [15, 5, 30, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);
const result = calcAverageHumanAge(dogsJulia);
console.log(`Tuổi trung bình của con người từ mảng tuổi chó là: ${result}`);

