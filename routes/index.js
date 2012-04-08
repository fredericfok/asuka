
var locals = {
        title:          'Asuka',
        description: 'Assuka web site was realized with NodeJs Express HTML5, CSS3',
        author: 	 'Frederic Fok',
        url_ref:     'http://asuka.herokuapp.com/',
        fb_app_id:  '304811146258402', 
        fb_app_logo: 'http://graph.facebook.com/100003559015754/picture',
        fb_app_loc: 'http://www.facebook.com/profile.php?id=100003559015754',
        fb_public_loc: 'http://fr-fr.facebook.com/public/Asuka-Asso',
        fb_app_namespace: "asukasso" 
    };

/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('asuka.ejs', locals)
};

exports.about = function(req, res){
    res.render('about.ejs', locals)
};

exports.contact = function(req, res){
    res.render('contact.ejs', locals)
};

exports.notfound = function(req, res){
    res.render('404.ejs', locals)
};

exports.fbtest = function(req, res) {
    res.render('fbtest.ejs', locals)  
};