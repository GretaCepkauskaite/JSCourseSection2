
var mark={
    name: 'Mark',
    mass: 120,
    height: 1.90,
    calcbmi: function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
};

var john={
    name: 'John',
    mass: 140,
    height: 1.90,
    calcbmi: function(){
        this.bmi =this.mass/(this.height*this.height);
        return this.bmi;
    }
};





if(john.calcbmi()>mark.calcbmi()){
    console.log(john.name + ' has higher bmi: ' + john.bmi);
} else if(john.calcbmi()<mark.calcbmi()) {
    console.log(mark.name + ' has higher bmi: ' + mark.bmi);
} else console.log('equal bmi\'s' + john.bmi + ' mark: ' + mark.bmi);