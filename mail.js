var email   = require('./node_modules/mailer/lib/node_mailer');

exports.mailsend = function(data, cb){
    data = {
        text:   data.msg, 
        from:   data.sender, 
        to:     "",
        subject: data.title
    }
    email.send({
      host : "smtp.sendgrid.net",              // smtp server hostname
      port : "587",                     // smtp server port 465 or 587 
      domain : "herokuapp.com",            // domain used by client to identify itself to server
      //ssl: true,                        // for SSL support - REQUIRES NODE v0.3.x OR HIGHER
      authentication : "login",        // auth login is supported; anything else is no auth
      username: "",
      password: "",
      to : "",
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
