const { User } = require("../Models/userSchema");
const jwt = require("jsonwebtoken");

const test = async (req, res) => {
     res.json("test is working")
}

//Register Endpoint
const registerUser = async (req, res) => {
    console.log("I'm here")
    try {
        const {firstName, userName, email, password} = req.body;
        // check required fields
        if (!firstName) {
            return res.json({
                error: "First name is required."
            })
        }
        if (!password || password.length < 6 ) {
            return res.json({
                error: "Your password should be at least 6 characters long. This is required."
            })
        }
        // check unique email
        const exist = await User.findOne({ email });
        if(exist) {
            return res.json({
                error: "Email is already taken."
            })
        }

        const user = await User.create({
            firstName,
            userName,
            email,
            password
        })

        return res.json(user)
    } catch(error) {
        res.status(500).send(error)
        console.log(error)
    }
};

// Login Endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check user exists
        console.log("User received.")
        const user = await User.find({ email });
        console.log(user);
        if(!user) {
            return res.json({
                error:"No user found."
            })
        }
        console.log(user)
        res.send(user)
        // Check if password matches
        // const match = await comparePassword(password, user.password)
        // if(match) {
        //     jwt.sign({email: user.email, id: user._id, userName: user.userName}, process.env.JWT_SECRET, {}, (error, token) => {
        //         if(error) throw error;
        //         res.json(user);
        //     });
        //     // res.json("Password match.")
        // }
        // if(!match) {
        //     res.json({
        //         error:"Password does not match."
        //     })
        // }
    } catch(error) {
        res.status(500).send(error)
        console.log(error)
    }
}


//named export, takes many
module.exports = {
    test,
    registerUser,
    loginUser
}