import bcrypt from "bcryptjs";

const users = [
    {
        name:"Admin",
        email:"admin@admin.com",
        password: bcrypt.hashSync("87654231",10),
        isAdmin:true
     
    },
    {
        name:"User",
        email:"user@user.com",
        password:"abcd1234",
        isAdmin:false
     
    },  
 
 
  ];
  
  export default users;
  