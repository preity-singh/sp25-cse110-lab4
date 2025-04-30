let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let val in statistics){
    if(val[0] === 'r' || statistics[val] % 2 === 1){
        console.log(statistics[val]);
    }
}