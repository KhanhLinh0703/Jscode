const dogs = [
    { weight: 1, owner: 'Sarah1' },
    { weight: 8, owner: 'John' },
    { weight: 13, owner: 'Alice' },
    { weight: 32, owner: 'Bob' },
    { weight: 17, owner: 'Sarah' },
    { weight: 19, owner: 'Michael' },
];
dogs.forEach(dog => {
    dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
});
const sarahDog = dogs.find(dog => dog.owner === 'Sarah');
if (sarahDog) {
    const foodStatus =
        sarahDog.recommendedFood <= sarahDog.weight * 1.1 &&
            sarahDog.recommendedFood >= sarahDog.weight * 0.9
            ? 'ăn hợp lý'
            : sarahDog.recommendedFood > sarahDog.weight
                ? 'ăn quá nhiều'
                : 'ăn quá ít';
    console.log(`Chó của Sarah đang ${foodStatus}`);
}
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(dog => {
    const foodStatus =
        dog.recommendedFood <= dog.weight * 1.1 &&
            dog.recommendedFood >= dog.weight * 0.9
            ? 'ăn hợp lý'
            : dog.recommendedFood > dog.weight
                ? 'ăn quá nhiều'
                : 'ăn quá ít';

    if (foodStatus === 'ăn quá nhiều' && !ownersEatTooMuch.includes(dog.owner)) {
        ownersEatTooMuch.push(dog.owner);
    } else if (foodStatus === 'ăn quá ít' && !ownersEatTooLittle.includes(dog.owner)) {
        ownersEatTooLittle.push(dog.owner);
    }
});
console.log(`${ownersEatTooMuch.join(' and ')} chó ăn quá nhiều!`);
console.log(`${ownersEatTooLittle.join(' and ')} chó ăn quá ít!`);
