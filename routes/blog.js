const router = require('express').Router();
const Blog = require('../model/blog');

router.post('/', async (req, res) => {
    const newblog = new Blog({
        name: req.body.name,
        email: req.body.email,
        title:req.body.title,
        date: req.body.date,
        content: req.body.content,
        filename: req.body.filename,
        admincheck:"pending"
    })
    try{
       const savedblog = await newblog.save();
       return res.status(200).send('blog saved'); 
    }catch(err){
        return res.status(400).send(err);
    } 
})

router.get('/', async (req, res) =>{
    const allblogs = await Blog.find({});
    res.send(allblogs);
})
router.get('/post', async (req, res) =>{
    const posted = [];
    const allblogs = await Blog.find({});
    for(var i = 0; i < allblogs.length; i++){
        if(allblogs[i].admincheck==="posted"){
            posted.push(allblogs[i]);
        }
    }
    res.send(posted.reverse());
})
router.get('/eachblog/:id', async (req, res) =>{
    const blog = await Blog.findById(req.params.id);
    if(!blog)return res.send('blog not found');
    else{
        return res.status(200).send(blog);
    }
})
router.get('/delete/:id', async (req, res) =>{
    const blog = await Blog.findByIdAndRemove({_id:req.params.id},console.log("blog deleted"));
    if(blog)return res.status(200).send('deleted');
    else{
        return res.send('error occured');
    }
    
})
router.post('/updatestatus', async (req, res)=>{
    const blog = await Blog.findByIdAndUpdate(req.body.id,
        {
            $set:{
                "admincheck":req.body.status
            }
        })
        if(!blog)return res.status(400).send('not updated');
        else{
            return res.status(200).send('updated');
        }
})
module.exports = router;