let money = 10000;
const buyACar = (car : any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("Can effort to buy " + car);
            } else {
                reject("Not enough money");
            }
        }, 100);
    }))
}

money = 12;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})
