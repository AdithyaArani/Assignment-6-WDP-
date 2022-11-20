// "database" as object literal
const users = [
    {
      userId: 0311,
      userName: "adithya",
      password: "arani"
    },
    {
      userId: 0731,
      userName: "sai",
      password: "chejarla"
    },
    {
      userId: 1234,
      userName: "alfred",
      password: "jones"
    }
  ];
  
  function getAllUsers() {
    return users;
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = users.filter( u => u.userName === user.userName);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  module.exports = { getAllUsers, login };
  
