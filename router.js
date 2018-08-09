const Authentication = require('./controllers/authentication');
const passportServices = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
                //false je da ne bi bio cookie, mi koristimo token
const requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app) {
  app.get('/', requireAuth, function(req,res){
    res.send({ message: 'Super secret code is ABC123' });
  })
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}

// app.get('/', function(req, res, next) {
//   res.send(['water', 'phone', 'paper']);
 //});
