var johnGames=[97, 134, 105];
var mikeGames=[97, 134, 105];
var maryGames=[97, 134, 105];

var johnSum, johnAvg=0;
if(johnGames.length){
    johnSum=johnGames.reduce(function(a,b) {return a+b;});
    johnAvg=johnSum/johnGames.length;
}

var mikeSum, mikeAvg=0;
if(mikeGames.length){
    mikeSum=mikeGames.reduce(function(a,b) {return a+b;});
   mikeAvg=mikeSum/mikeGames.length;
}

var marySum, maryAvg=0;
if(maryGames.length){
    marySum=maryGames.reduce(function(a,b) {return a+b;});
    maryAvg=marySum/maryGames.length;
}

if(mikeAvg>johnAvg && mikeAvg>maryAvg){
    console.log('Mike is the winner. Mike avg: ' + mikeAvg + ' john avg: ' + johnAvg + ' mary avg ' + maryAvg);

} else if (mikeAvg<johnAvg && johnAvg>maryAvg){
    console.log('John is the winner.  Mike avg: ' + mikeAvg + ' john avg: ' + johnAvg + ' mary avg ' + maryAvg);
} else if (maryAvg>johnAvg && maryAvg>mikeAvg){
    console.log('Mary is the winner.  Mike avg: ' + mikeAvg + ' john avg: ' + johnAvg + ' mary avg ' + maryAvg);
}

else console.log('Draw. Avg ' + mikeAvg + ' ' + johnAvg);




