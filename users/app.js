import yargs from "yargs";
import {hideBin} from 'yargs/helpers'
import {createUser, removeUser, readUsers, updateUser} from './users.js'

yargs(hideBin(process.argv))
.command({
    command: 'createUser', 
    describe: "create new user",
    builder:{
        id:{
            describe: "user id",
            demandOptions: false,
            type: "string"
        },
        name:{
            describe: "user name",
            demandOptions: true,
            type: "string"
        },
        email:{
          describe: "user email",
          demandOptions: true,
          type: "string"
      },
    },
    handler: (argv) => {
        createUser(argv.name, argv.email);
    },
  })

yargs(hideBin(process.argv))
.command({
   command:"delete", 
   describe: "delete new user",
   builder:{
    id:{
        describe: "user id",
        demandOptions: true,
        type: "string"
    },
},
   handler: (argv) =>{
       removeUser(argv.id)
   },
   
})

yargs(hideBin(process.argv)).command({
    command: 'read', 
    describe: 'read your users', 
    builder:{
        id:{
        describe: "user id",
        demandOptions: false,
        type: "string"

        }, 
        
    }, 
    handler(argv){
        readUsers(argv.name)
    }
   
})

yargs(hideBin(process.argv)).command({
    command: 'update', 
    describe: 'update your users', 
    builder:{
        name:{
            describe: 'users name', 
            demandOptions: false, 
            type:'string'
        },
        id:{
            describe: 'users name', 
            demandOptions: false, 
            type:'string'
        }, 
        builder:{
            email:{
                describe: "user email",
                demandOptions: false,
                type: "string"
            }
        }
      
    }, 
    handler(argv){
        updateUser(argv.id, argv.name, argv.email)
    }
   
})

  .parse();



