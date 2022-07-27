function ProfileInfo() {
   this.setUsername = (username) => this.username = username
   this.getUsername = () => this.username
   this.setEmail = (email) => this.email = email
   this.getEmail = () => this.email
   this.setAddress = (adress) => this.adress = adress
}

function User() {
   this.setName = (name) => this.name = name
   this.getName = () => this.name
   this.setAge = (age) => this.age = age
   this.getAge = () => this.age
   this.setProfileInfo = (info) => this.profileInfo = info
   this.getProfileInfo = () => this.profileInfo
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

console.log(user)