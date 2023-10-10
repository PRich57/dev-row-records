const randomizeIndex = async (arrayInput) => {
    let randomFourIndexes = [];
    for (let x = 0; x<4; x++){
        let randomIndex = Math.floor(Math.random() * arrayInput.length);
        let temp = arrayInput.splice(randomIndex,1);
        randomFourIndexes.push(temp)
    }
    return randomFourIndexes
}

module.exports = randomizeIndex