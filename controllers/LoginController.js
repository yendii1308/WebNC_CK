
const User = require('../models/User');
const formidable = require('formidable');



module.exports.login = (req, res) => {
    res.render('login');
}

module.exports.logout = (req, res) => {
    res.cookie('user_name', '', { expires: new Date(0), httpOnly: false});
    res.redirect('/login');
}

module.exports.loginByUsername = (req, res) => {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    var body = req.body;

    var username = body.username;
    var pass = body.pass;
    
    var dataform = [];
    /*
    form.parse(req, function(err, field, files) {
        const {username, pass} = field;
        dataform.push(username, pass);
    })*/

    async function Check() {
        let user = await User.findOne({"username": username, "pass": pass});
        if(user != null){
            res.cookie('user_name', user.name, { expires: new Date(Date.now() + 60000*60*24*60), httpOnly: false });
            console.log(user.name)
            //res.send({"code": 200});
            res.render('index', { title: 'Chat-SocketRoom' });
        }else{
            res.render('login');
        }
    }
    Check()
}