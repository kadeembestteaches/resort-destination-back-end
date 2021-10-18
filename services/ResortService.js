const resortModel = require("../models/ResortModel.js");

exports.createAResort =(req,res)=>{

    const resort = new resortModel(req.body);
    resort.save()
    .then(newResort=>{

        res.json({
            message :"The Resort Was successfully created and stored in the databaase",
            data : newResort
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message :err
        })
    })

};


exports.getResorts =(req,res)=>{
        
    const featuredStr =req.query.featured

  
    if(featuredStr)
    {
       
        resortModel.find()
        .where("featured").equals(featuredStr=== 'yes' ? true : false)
        .then(resorts=>{

    
            res.json({
                message : featuredStr==="yes" ? "A list of featured resorts " : "A list of non featured resorts",
                data : resorts,
                totalResortDestinations : resorts.length
            })
        })
        .catch(err=>{
            res.status(500).json({
                message :err
            })
        })
    }
         

    else
    {

        resortModel.find()
        .then(resorts=>{
            res.json({
                message : `A list of  all Resorts`,
                data : resorts,
                totalResortDestinations : resorts.length
            })
        })
        .catch(err=>{
            res.status(500).json({
                message :err
            })
        })

    }

};

exports.getAResort=(req,res)=>{

    resortModel.findById(req.params.id)
    .then(resort=>{

       
        if(resort)
        {
            res.json({

                message : `Resort with the id ${req.params.id}`,
                data : resort
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no Resort in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{


        if(err.name==="CastError" && err.kind==="ObjectId")
        {

            res.status(404).json({
                message : `There is no Resort in our database with the id ${req.params.id}`
            })
        }

        else
        {
            res.status(500).json({
                message :err
            })
        }


 
    })


};


exports.updateAResort =(req,res)=>{


    resortModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(resort=>{


        //if hero is not null

        if(resort)
        {
            res.json({
                message : `The Resort with the id ${req.params.id} was updated`,
                data : resort
            })

        }

        //hero contains null
        else
        {
            res.status(404).json({
                message : `The Resort with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};

exports.deleteAResort=(req,res)=>{

    resortModel.findByIdAndRemove(req.params.id)
    .then((resort)=>{

        if(resort)
        {
            res.json({
                message: `The Resort with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `Resort with ID ${req.params.id} was not found`
            })
        }


    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};