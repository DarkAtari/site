//b = prompt('KEKW')
//alert(b);

const a = 10
let b = 25

console.log(a + b)

if (a === 10) {
    console.log('Хы')
} else {
    console.log('Хыыыы')
}

const fl = false
/*if (fl)
{
    console.log('1')
} else {
    console.log('2')
}*/

fl ? console.log('1') : console.log('2')

function calcAge (year) {
    return 2020 - year
}

const myAge = calcAge (2002)
console.log (myAge) 

console.log (calcAge(2003))

function AGEEE (name, year) {
    const agee = calcAge(year)
    console.log ('Чел ' + name + ' ГОд ' + agee)
}
AGEEE ('Олёша', 2002)

const Arr = [1, 2, 3]
//const Arr = new Array (1, 2, 3)
//console.log(Arr)
/*console.log(Arr[0])
console.log(Arr.length)

Arr[1] = 40
console.log(Arr)

Arr[3] = 20
console.log(Arr)*/

/*for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i])
}*/

for (let i of Arr) {
    console.log (i)
}

const people = {
    firstName: 'Олёша',
    year: 2002,
    language: [1, 2, 3],
    fl: false,
    func: function() {
        console.log('Ya Func')
    }
}
console.log(people)
console.log(people.firstName)
people.func();
