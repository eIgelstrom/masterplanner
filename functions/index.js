var fetch =require('node-fetch');
var axios = require('axios');

//import fetch from 'node-fetch';
const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("heeeeej: ");
      axios.get('https://www.kth.se/api/kopps/v2/courses/DM.json')
      //  axios.get('http://crossorigin.me/https://www.kth.se/api/kopps/v2/courses/DM.json')
      .then(response => {
        //console.log(response.data + "data")
        console.log(response.data.courses.title + "courses");
        return(response.data);
      })
      .catch(error => {
        console.log(error);
      })

});

exports.getAllCourses = functions.https.onRequest((request, response) => {
  // response.send("heeej");
  // //fetch('https://www.kth.se/api/kopps/v2/courses/DM.json')
  // var apiet = fetch('http://pebble-pickup.herokuapp.com/tweets')
  // .then(function(res) {
  //   if (!res.ok) {
  //   throw Error(res.statusText);
  //
  // }
  //     console.log("res");
  //     return res;
  //
  //
  // })
  // .catch(function(error) {
  //   console.log('Looks like there was a problem: \n', error);
  // });

});
