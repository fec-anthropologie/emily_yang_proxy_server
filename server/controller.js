const request = require('request');
const rp = require('request-promise');

// const search = (req, res) => {
//   request('http://localhost:3000', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//     response.status()
//   });
// }

var options = {
  method: 'GET',
  uri: 'http://localhost:3000',
  resolveWithFullResponse: true
};

const search = (req, res) => {
  rp(options)
    .then(function (data) {
      // res.status(200).send(data)
      console.log('got')
    })
    .catch(function (err) {
      console.log(err)
    });
}

module.exports = { search }