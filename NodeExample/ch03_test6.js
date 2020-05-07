var Person = {};
Person['age'] = 20;
Person["name"] = "소녀시대";

var opper = function(a, b){
    return a + b;
};

Person["add"] = opper;
console.log("%s의 나이는 %d 살이다.", Person.name, Person.add(10, 10));