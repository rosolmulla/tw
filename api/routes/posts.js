const Post = require("../models/Post");
const router = require("express").Router();

// create a post
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err)
    }
});
// delete a post
router.delete("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted")
        }else{
            res.status(403).json("you can delete only your post")
        }
    }catch(err){
        res.status(500).json(err);
    }
});
// get a post
router.get("/:id", async (req,res,next)=>{
    console.log('req',req.params)
    try{
        const post = await Post.findById(req.params.id);
        if(!post) throw new Error('error while getting post')
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});
// get timeline posts
router.get("/timeline/:id", async (req, res)=>{
    try{
        const currentUser = await User.findById(req.params.id);
        const userPost = await Post.find({userId: currentUser._id});
        res.status(200).json(userPost);
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;