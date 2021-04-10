const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/user');

router.post('/register',async (req,res)=>{
    const getuser = await User.findOne({email: req.body.email});
    if(getuser)
    return res.send('user exists');
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        email:req.body.email,
        password:hash
    })
    try{
        const saveduser = await user.save();
        return res.send("user created");
    }catch(err){
        return res.status(400).send(err);
    }   
})
router.post('/login', async (req, res) =>{
    const getuser = await User.findOne({ email: req.body.email});
    if(!getuser)return res.status(400).send("User not found");
    else{
        const hash = await bcrypt.compare(req.body.password, getuser.password);
        if(!hash)return res.status(400).send("Password incorrect");

        else{
            return res.status(200).send(getuser);
        }
    }
})

module.exports= router;