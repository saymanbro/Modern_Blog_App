import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../UserSchema/userSchema.js';

export const  signin = async (req, res) => {
        const {email, password} = req.body;

        try{
            const existingUser = await User.findOne({email});
            if(!existingUser) res.status(404).json({message:"User Not Fount"});
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if(!isPasswordCorrect) res.status(404).json({message:"Invalid Credintials"});
            const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test", {expiresIn:'1h'});
            res.status(200).json({result: existingUser, token})
           
        }catch(e){
            res.status(500).json({message:'something went wrong'})
        }
  
}


export const signup = async (req, res) => {

        const { email, password, confirmPassword, firstName, lastName} = req.body;
        
        try{
            const existingUser = await User.findOne({email});

            if(existingUser) res.status(404).json({message:"This email is taken"});

            if(password !== confirmPassword) res.status(404).json({message:'password not matched'})

            const hashPassword = await bcrypt.hash(password, 12);

            const result = await User.create({email, password: hashPassword, name: `${firstName} ${lastName}`})
       
            const token = jwt.sign({ email: result.email, id: result._id}, 'test', {expiresIn:'1h'}); 

            res.status(201).json({result,  token})
        }catch(e){
            res.status(500).json({message:'something went wrong in signup'})
        }
    
}
