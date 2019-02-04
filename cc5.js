
var bill={
    bills: [124, 48, 268, 180, 42],

    calcTips: function()
    {
        this.tips=[];
        for(var i=0; i<this.bills.length; i++)
        {
            var tip;
            if(this.bills[i]<50){
                tip=this.bills[i]*0.2;
            } else if (this.bills[i]>=50 && this.bills[i]<=200){
                 tip=this.bills[i]*(15/100);
            } else tip =this.bills[i]*(10/100);
            this.tips[i]=tip;
        }
        return this.tips;
        
    },

    calcFinal: function()
    {
        this.calcTips();
        this.final=[];
        for(var i=0; i<this.bills.length; i++)
        {
            this.final[i]=this.bills[i]+this.tips[i];
        }
        return this.final;
    }
};

bill.calcTips();
bill.calcFinal();
console.log(bill);
console.log(bill.tips);
console.log(bill.final);




var mark={
    bills: [77, 375, 110, 45],

    calcTips: function()
    {
        this.tips=[];
        for(var i=0; i<this.bills.length; i++)
        {
            var tip;
            if(this.bills[i]<100){
                tip=this.bills[i]*0.2;
            } else if (this.bills[i]>=100 && this.bills[i]<=300){
                 tip=this.bills[i]*(10/100);
            } else tip =this.bills[i]*(25/100);
            this.tips[i]=tip;
        }
        return this.tips;
        
    },

    calcFinal: function()
    {
        this.calcTips();
        this.final=[];
        for(var i=0; i<this.bills.length; i++)
        {
            this.final[i]=this.bills[i]+this.tips[i];
        }
        return this.final;
    }

};

var markAvg=average(mark.calcTips());
var johnAvg=average(bill.calcTips());
console.log(mark.tips);
console.log(markAvg + ' ' + johnAvg);

markAvg>johnAvg ? console.log ('Mark\'s family has higher average') : console.log('johns family has higher average')

function average(tips)
{
    var sum, avg=0;
    if(tips.length){
        sum=tips.reduce(function(a,b) {return a+b;});
        avg=sum/tips.length;
    
    }
    return avg;
}