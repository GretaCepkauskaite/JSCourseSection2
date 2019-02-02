var bills=[124, 48, 268];

var tips=[];

tips.push(tip(bills[0]));
tips.push(tip(bills[1]));
tips.push(tip(bills[2]));

var finalPaid=[];

finalPaid.push(finalBill(bills[0], tips[0]));
finalPaid.push(finalBill(bills[1], tips[1]));
finalPaid.push(finalBill(bills[2], tips[2]));

console.log(bills);
console.log(tips);
console.log(finalPaid);

function tip(bill)
{
    var tip;
    if(bill<50){
        tip=bill*0.2;
    } else if (bill>=50 && bill<=200){
        tip=bill*(15/100);
    } else tip =bill*(10/100);
    return tip;
}

function finalBill(bill, tip)
{
    return bill+tip;
}