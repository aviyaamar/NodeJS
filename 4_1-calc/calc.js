const yargs = require('yargs')



yargs.command({
    command: 'add',
    describe: 'Add a two number',
    builder:{
        num1:{
            describe: 'first argument', 
            demandOption: true,
            type: "number",
        }
    }, 
    num2:{
        describe: 'second argument', 
            demandOption: true,
            type: "number", 
    }, 
    handler: function (argv) {
        console.log( argv.num1 + argv.num2)
    }
})

yargs.command({
    command: 'sub',
    describe: 'sub a two number',
    builder:{
        num1:{
            describe: 'first argument', 
            demandOption: true,
            type: "number",
        }
    }, 
    num2:{
        describe: 'second argument', 
            demandOption: true,
            type: "number", 
    }, 
    handler: function (argv) {
        console.log( argv.num1 - argv.num2)
    }
})

yargs.command({
    command: 'mult',
    describe: 'multiply a two number',
    builder:{
        num1:{
            describe: 'first argument', 
            demandOption: true,
            type: "number",
        }
    }, 
    num2:{
        describe: 'second argument', 
            demandOption: true,
            type: "number", 
    }, 
    handler: function (argv) {
        console.log( argv.num1 * argv.num2)
    }
})

yargs.command({
    command: 'pow',
    describe: 'multiply a two number',
    builder:{
        num1:{
            describe: 'first argument', 
            demandOption: true,
            type: "number",
        }
    }, 
    num2:{
        describe: 'second argument', 
            demandOption: true,
            type: "number", 
    }, 
    handler: function (argv) {
        console.log( Math.pow(argv.num1 , argv.num2))
    }
})
yargs.parse()