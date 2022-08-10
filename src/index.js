var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty','sixty','seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero'
    }  
    if (number < 10) {
        return ones[number]
    } 
    if (number >=10 && number < 20) {
        return teens[number % 10]
    } 
    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return tens[number / 10]
        } else { 
            return tens[Math.trunc(number / 10)] + ' ' + ones[number % 10];
        }
    }
    if (number >= 100 && number < 1000) {
        if (number % 100 == 0) {
            return ones[number / 100] + ' hundred'
        } else if (number % 100 / 10 < 1) {
            return ones[Math.trunc(number / 100)] + ' hundred ' + ones[number % 100]
        } else if (number % 100 / 10 == 1) {
            return ones[Math.trunc(number / 100)] + ' hundred ' + teens[number % 10]
        } else if (number % 10 == 0) {
            return ones[Math.trunc(number / 100)] + ' hundred ' + tens[number % 100 / 10]
        } else if (number % 100 / 10 > 1 && number % 100 / 10 < 2 ) {
            return ones[Math.trunc(number / 100)] + ' hundred ' + teens[number % 10]
        }
        else {
            return ones[Math.trunc(number / 100)] + ' hundred ' + tens[Math.trunc(number % 100 / 10)] + ' ' + ones[number % 10]
        }
}
}