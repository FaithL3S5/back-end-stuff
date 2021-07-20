const router = require('express').Router();
const Admin = require('../model/Admin');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken')
const bcrypt = require('bcryptjs');
const {registerValidator, loginValidator, userValidator} = require('../validator')

router.post('/register', async (req,res) => {
    
    const {error} = registerValidator(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const emailExist = await Admin.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email Already Used');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id + ' has been added'});
        res.send({savedUser});
    }catch(err){
        res.status(400).send(err);
    }

});

router.post('/login', async (req,res) => {
    
    const {error} = loginValidator(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExist = await Admin.findOne({email: req.body.email});
    if(!emailExist) return res.status(400).send('Email or Password is Invalid or The User is not Registered');
    const validPwd = await bcrypt.compare(req.body.password, emailExist.password);
    if(!validPwd) return res.status(400).send('Email or Password is Invalid or The User is not Registered');

    const token = jwt.sign({_id: emailExist._id}, process.env.TOKEN_SEC);
    res.header('auth-token', token).send(token);

});

router.post('/vip-input', verify, async (req,res) => {
    
    const {error} = userValidator(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const userExist = await User.findOne({name: req.body.name});
    if(userExist) return res.status(400).send('VIP Already Checked-In');

    const user = new User({
        name: req.body.name,
        country: req.body.country,
        ETA: req.body.ETA,
        arrival: req.body.arrival,
        attribute: req.body.attribute
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id + ' has been added'});
        res.send({savedUser});
    }catch(err){
        res.status(400).send(err);
    }

});

router.put('/vip-input/:id', verify, async (req,res,next) => {
    User.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        User.findOne({_id:req.params.id}).then(function(x){
            res.send(x + '\n Successfully Updated');
        });
    });
});

module.exports = router;