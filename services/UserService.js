const userModel = require("../models/UserModel");

exports.createAUser =(req,res)=>{

    const user = new userModel(req.body);
    user.save()
    .then(newUser=>{

        res.json({
            message :"The user Was successfully created and stored in the databaase",
            data : newUser
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message :err
        })
    })

};


exports.getUsers =(req,res)=>{
        
   
    userModel.find()
    .then(users=>{
        res.json({
            message : `A list of  all Users`,
            data : users,
            totaUsers : users.length
        })
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

    

};

exports.getAUser=(req,res)=>{

    userModel.findById(req.params.id)
    .then(user=>{

       
        if(user)
        {
            res.json({

                message : `user with the id ${req.params.id}`,
                data : user
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no user in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{


        if(err.name==="CastError" && err.kind==="ObjectId")
        {

            res.status(404).json({
                message : `There is no user in our database with the id ${req.params.id}`
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


exports.updateAUser =(req,res)=>{


    userModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(user=>{


        //if hero is not null

        if(user)
        {
            res.json({
                message : `The user with the id ${req.params.id} was updated`,
                data : user
            })

        }

        //hero contains null
        else
        {
            res.status(404).json({
                message : `The user with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};

exports.deleteAUser=(req,res)=>{

    userModel.findByIdAndRemove(req.params.id)
    .then((user)=>{

        if(user)
        {
            res.json({
                message: `The user with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `user with ID ${req.params.id} was not found`
            })
        }


    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};