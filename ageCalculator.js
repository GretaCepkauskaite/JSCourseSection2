var year=prompt('Insert year');
var month=prompt('inesert month');
var day=prompt('insert day');

var date=new Date;
var currentYear=date.getFullYear();
var currentMonth=date.getMonth()+1;
var currentDay=date.getDate();

var legalAge=18;

if(currentYear-year>legalAge){
    console.log('Legal');
} else if (currentYear-year==legalAge && currentMonth>=month && currentDay>=day)
{
    console.log('Legal with month');
} else console.log('Illegal');

var array={name:'john', age:'25'};
console.log(array);
