const https = require('https')


https.get('https://api.chucknorris.io/jokes/random',res =>{

        let data = ""

        res.on("data",chunk =>{
            data += chunk
        })

        res.on("end",() =>{
            data = JSON.parse(data)
            console.log(data.value)
        })

    })



