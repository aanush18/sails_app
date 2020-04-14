/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const request = require('request');
//const apiKey = '';
//var ans;
module.exports = {
  home: function(req,res){
    const apiKey='b121f5d332c7feb8cda50520f00a0aec';
    var city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      rsails.log.error(err);
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        rsails.log.error(err);
      } else {
        //let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        //res.render('home', {weather: weatherText, error: null});
        //console.log(weather.main.temp);
        res.view('list', {articles:weather.main.temp});
        //res.send(weather.main.temp);
      }
    }
  });
},

};
