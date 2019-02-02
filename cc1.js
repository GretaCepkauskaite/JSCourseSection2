var markMass, johnMass, markHeight, johnHeight, johnBMI, markBMI;

markMass=108;
markHeight=1.82;

johnHeight=1.90;
johnMass=100;

markBMI=markMass/(markHeight*markHeight);
johnBMI=johnMass/(johnHeight*johnHeight);

console.log(markBMI, johnBMI);
var isHigher= markBMI>johnBMI;

console.log('IS Mark BMI higher than johns?' + isHigher);