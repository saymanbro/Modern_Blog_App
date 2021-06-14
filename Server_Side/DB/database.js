import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.CONNECTION, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> {
    console.log('db connect successfully')
}  )
.catch((e)=> console.log('error in database folder' + e))
mongoose.set('useFindAndModify',  false)