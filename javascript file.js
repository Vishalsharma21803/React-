class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeusername(){
        return `${this.username.toUpperCase()}`;
    }
}
const thing=new user("vishal","vishal21@gail.com","12345678");
console.log(thing.encryptPassword());
console.log(thing.changeusername());