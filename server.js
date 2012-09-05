var routes = require('./routes'); 
var m_app = require('./app.js').init(process.env.PORT);

// users ... 
var users = [{name:'fred'},{name:'bob'}];
function loadUser(req, res, next){
  var user = users[req.params.id];
  console.log("user id = "+req.params.id);
  if(user) {
      req.user = user; 
//      req.user.id = req.params.id; 
      next(); 
  }else{
      next(new Error('failed to find the user '+req.params.id)); 
  }
}
function authorize(req, res, next){
  console.log("authorize user :"+req.user.name);
//  req.authenticatedUser.id == req.user.name
  'fred' == req.user.name
  ? next()
  : next(new Error('unauthorized')); 
}

/*
m_app.get('/', function(req,res){
    locals.date = new Date().toLocaleDateString();
    res.render('asuka.ejs', locals);
});
*/
m_app.get('/', routes.index);
m_app.get('/about', routes.about);
m_app.get('/contact', routes.contact);
m_app.get('/adhesion', routes.adhesion);
m_app.get('/projets', routes.projets);
m_app.post('/contactmsg', routes.sndmail); 
m_app.get('/fbtest', routes.fbtest);

m_app.post('/', function(req, res){
  console.log(req.body.user);
  res.redirect('back'); 
});

m_app.get('/user/:id', loadUser, function(req, res){
  res.send('viewing '+req.user.name);
  console.log("body :"+req.body); 
});

m_app.get('/user/:id/edit', loadUser, authorize, function(req, res){
//app.get('/user/:id/edit', loadUser, function(req, res){
  res.send('editing ' + req.user.name); 
});

m_app.put('/user/:id/', loadUser, function(req, res){
  res.send('updating '+req.user.name); 
});

/* The 404 Route (ALWAYS Keep this as the last route) */
m_app.get('*', routes.notfound); 


