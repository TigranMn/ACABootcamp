class ProfileInfo {
   constructor() {
   }
   setUsername(username) { this.username = username}
   getUsername() {return this.username}
   setEmail(email) {this.email = email}
   getEmail() {return this.email}
   setAddress(adress) {this.adress = adress}
}

class User {
 constructor() {}
setName(name) {
   this.name = name
}
 getName() {
   return this.name
}
 setAge(age) {
   this.age = age
 }
 getAge(){
   return this.age}
 setProfileInfo(info) {
   this.profileInfo = info
 }
 getProfileInfo(){
   return this.profileInfo}
}
const profileInfo = new ProfileInfo()
profileInfo.setUsername('Shinigami');
console.log(profileInfo.getUsername());
profileInfo.setEmail('shinigami@mail.ru');
console.log(profileInfo.getEmail());
profileInfo.setAddress('Parsegov 4/25');

const user = new User()
user.setName('Antonio Spagetti'); 
console.log(user.getName());
user.setAge(66);
console.log(user.getAge());
user.setProfileInfo(new ProfileInfo);
console.log(user.getProfileInfo());

console.log(profileInfo)