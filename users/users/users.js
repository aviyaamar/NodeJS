
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';


export  const createUser = (name, email)=>{
    const users =  loadUsers()
    users.push({
        id: uuidv4(), 
        name: name, 
        email: email
    })
    saveUsers(users)
}

export const removeUser = (id)=>{
    const users  = loadUsers()
    const usersToKeep = users.filter((user)=> user.id !== id)

    saveUsers(usersToKeep)
}

export const readUsers = (name) =>{
    const users = loadUsers()
    const user = users.find((user)=> user.name === name)

    if(user){
        console.log(user.name, user.email);
    }
    else{
        console.log('not found!');
    }
}

export const updateUser = (id, name, email) =>{
    const users = loadUsers()

    const findUser = users.findIndex((user)=> user.id === id)

    users[findUser].name= name
    users[findUser].email= email

    saveUsers(users)
  
}

const saveUsers = (users) =>{
    const dataJson =JSON.stringify(users)
    // console.log('check', dataJson);
    fs.writeFileSync('users.json', dataJson)
}

const loadUsers = () =>{
    try{
        const bufferUser = fs.readFileSync('users.json')
        const dataJson = bufferUser.toString();
        // console.log('checkBuffer:', bufferUser);
        return JSON.parse(dataJson)

    }
    catch(e){
        return []
    }
}

