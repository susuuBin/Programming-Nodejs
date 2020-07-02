function User(id, name, email){
    this.id = id;
    this.name = name;
    this.email = email;
}

User.prototype.getUser = function(){
    return { id: this.id, name: this.name, email: this.email };
}

User.prototype.group = { id: "group1", name: "친구"};

User.prototype.printUser = function(){
    console.log("user 이름 : %s, group 이름 : %s", this.name, this.group.name);
}

User.prototype.printUseremailadd = function(){
    console.log("user 이름 : %s, group 이름 : %s, user 메일 : %s", this.name, this.group.name, this.email + " 입니다.");
}

module.exports = new User("test01", "양수빈", "luvproof@naver.com");