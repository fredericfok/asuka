var email   = require('./node_modules/mailer/lib/node_mailer');

exports.mailsend = function(data, cb){
    data = {
        text:   data.msg, 
        from:   data.sender, 
        to:     "frederic fok <frederic.fok@gmail.com>",
        subject: data.title
    }
    email.send({
      host : "in.mailjet.com",              // smtp server hostname, e.g. smtp.sendgrid.net
      port : "587",                     // smtp server port 465 or 587 
      domain : "herokuapp.com",            // domain used by client to identify itself to server
      //ssl: true,                        // for SSL support - REQUIRES NODE v0.3.x OR HIGHER
      authentication : "login",        // auth login is supported; anything else is no auth
      username: "dcbdad26f9bfafdc60aeecdd6d942287",
      password: "fbb8d70ee02de531b4bee5b0084ca3b6",
      to : "frederic.fok@gmail.com",
      from : data.from,
      subject : data.title,
      body: "Hello! This is a test of the node_mailer:"+data.msg,
    },
    function(err, result){
      if(err){ console.log(err); 
        cb("error sending email");
      }else {cb("mail sent successfully");}
    });
    return 
}
