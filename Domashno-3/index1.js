// Napisete edna callback funkcija.

//Synchronous Callback
function greet(name) {
    console.log(`Hello ` + name);
}

function callBackName(callback) {
    let name = `Darko Kiprijanovski`;
    callback(name)
}

callBackName(greet)

//Asynchronous Callback
function fetchData(callback) {
    setTimeout(function() {
        let car = "Toyota"
        callback(car)
    }, 2000)
}

function mostReliableCar(car) {
    console.log(`Most reliable car is : ` + car);
}

fetchData(mostReliableCar)