const axios = require('axios')
const request = require('request');
const superagent = require('superagent')

const url = 'https://geek-jokes.sameerkumar.website/api?format=json';
//Axios
const GetAxios = async (url) => {
    const respone = await axios.get(url);
    console.log(respone.data.joke);
};

GetAxios(url);

//request
request({ url: url }, (err, respone) => {
    console.log(respone.body);
});


superagent.get(url).end((err, res) => {
    console.log(res.body);
})