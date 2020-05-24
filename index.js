const express = require('express');
const app = express();
const request = require('request');

const clientId = '905a043bc898cef8da39';
const clientSecret = '33fc50da7f9263f5cd0bde4281d8da253512dcde';

let authorizationCode = '';
let token = '';
let tokenType = '';
let userData = {};

app.get('/', (req, res) => {
	res.send('Welcome to Server!');
})

app.get('/oauth/redirect', (req, res) => {
	authorizationCode = req.query.code;
	console.log("authorizationCode: ", authorizationCode);
	request({
		url: `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode}`,
		method: 'post',
		headers: {
			accept: 'application/json'
		}
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let data = JSON.parse(response.body);
			token = data.access_token;
			tokenType = data.token_type;
			console.log('token: ', token);
			console.log('tokenType: ', tokenType);
			console.log('response.body: ', response.body);
			request({
				url: 'https://api.github.com/user',
				method: 'get',
				headers: {
					accept: 'application/json',
					'User-Agent': 'molly-app',
					Authorization: `${tokenType} ${token}`
				}
			}, (error, response, body) => {
				console.log('response user info: ', body)
				if (!error && response.statusCode === 200) {
					userData = JSON.parse(response.body);
					console.log('user data: ', userData);
					// res.cookie('userData', userData);
					res.redirect(`http://localhost:8080/#/user-information/${userData.name}/${userData.email}/${userData.location}`);
				} else {
					console.log('Has error with user infor ', error);
					res.redirect('http://localhost:8080/');
				}
			})
		} else {
			console.log('Has error with token ', error);
		}
	})
});

app.listen(8888, () => {
	console.log('App listening on port 8888!');
});