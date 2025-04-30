function everySecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);

    setTimeout(everySecond, 1000);
}

everySecond();

