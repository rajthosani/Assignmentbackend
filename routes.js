const router = require("express").Router();
const movies=[
      
        
            {"name":"Joker",
            "release_date":"2017",
            "rating":"8"},

        
            {"name":"Joker",
            "release_date":"2017",
            "rating":"8"},


        
             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},

             {"name":"Joker",
             "release_date":"2017",
             "rating":"8"},


];


router.get("/", async(req,res)=>{
     try{
        
           res.status(200).json(movies);

        }catch(err){
            res.status(500).json(err);
        }
});


router.post("/",async (req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        if(username==="dummyusername" && password==="dummypassword"){
            res.status(200).json({username,password});
        }
        else {
            res.status(400).json("username or password is incorrect")
        }
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;  