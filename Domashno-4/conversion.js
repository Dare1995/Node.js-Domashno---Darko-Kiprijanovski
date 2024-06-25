const convertMilesToKm = (miles) => {
    return miles * 1.60934;
};

const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

const convertPoundsToKg = (pounds) => {
    return pounds * 0.453592;
};

const convertFeetToMeters = (feet) => {
    return feet * 0.3048;
};

module.exports = {
    convertMilesToKm,
    convertCelsiusToFahrenheit,
    convertPoundsToKg,
    convertFeetToMeters,
};