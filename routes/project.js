const router = require('express').Router();
const multer = require('multer')
const sets = require('../model/project');

// Multer for storing image 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/public/media/project')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage }).single('file');

// post route for project
router.post('/', upload , async(req, res) => {
    
        let work = new sets({
            name:req.body.name,
            github:req.body.github,
            link:req.body.link,
            description:req.body.description,
            filename:req.file.filename        
        })
        const savedWork = await work.save()
        // res.send(savedWork)
        return res.status(200).send(req.file)
});


//Get route for project
router.get('/', async(req, res) => {
  const allsets = await sets.find({ })
  const Sets = [];
  for(let i=0;i<allsets.length;i++) {
    // element array with mongo object id
    Sets.push( {_id:allsets[i]._id,route:"project",name:allsets[i].name,github:allsets[i].github,link:allsets[i].link,description:allsets[i].description,filename:allsets[i].filename} )
  }
  // sending array as response 
  res.send(Sets)
    
 });

 //delete route for carousel
 router.put('/delete/:id',async(req,res)=>{
  const data = await sets.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  // sending delete status 
  res.send(data);

})

module.exports = router;