var express = require('express');
var request = require('superagent')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('views'));

var mailchimpInstance   = 'us14',
    listUniqueId        = '38a9a5df27',
    mailchimpApiKey     = '71a1650c3bdf3e1a9e21c4bdbe605ddb-us14';
// 71a1650c3bdf3e1a9e21c4bdbe605ddb-us14

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/signup', function (req, res) {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstName,
            'LNAME': req.body.lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});