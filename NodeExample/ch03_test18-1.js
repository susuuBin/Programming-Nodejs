function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk= function(speed){
    console.log(speed + "km 속도로 걸어 갑니다.");
}

Person.prototype.eat = function(food){
    console.log(food + " 를(을) 맛있게 먹습니다.");
}

var person01 = new Person("소녀시대", 20);
var person02 = new Person("걸스데이", 20);

console.log(person01.name + ' 객체의 walk(10)을 호출합니다.');
person01.walk(10);

console.log(person02.name + ' 객체의 eat("pizza")을 호출합니다.');
person02.eat("pizza");