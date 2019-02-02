console.log('script file');

var age=prompt('Insert age');

var legalAge;
console.log(age);
legalAge=18;

//age>=legalAge ? console.log('pilnametis') : console.log('nepilnametis');

var status = age>=legalAge ? 'pilnametis' : 'nepilnametis';
console.log(status);