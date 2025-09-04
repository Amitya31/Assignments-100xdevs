// import { PrismaClient } from "@prisma/client";

// const prismaSingleton = ()=>{
//     return new PrismaClient()
// }

// declare global {
//     var prisma:undefined| ReturnType<typeof prismaSingleton>
// } // for typescript defining thr type

// const prisma = globalThis.prisma ?? prismaSingleton()

// export default prisma;

// if(process.env.NODE_ENV!=='production') globalThis.prisma = prisma
import mongoose, {model, Model, Schema} from 'mongoose';
const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlenth:[5,'More than 5'],
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Should match the expression'
        ],
    },

    password:{
        type:String,
        required:true,
        unique:true,
        minlenth:[5,'More than 5']
    }
})

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password=this.password;
})

UserSchema.method('accessToken',function(){
    
})

UserSchema.method('refreshToken', async function() {
  const secretKey = process.env.JWT_SECRET;
  
  // The payload is typically just the user ID
  const payload = {
    _id: this._id,
  };
  
  // Generate the token
//   const token = jwt.sign(payload, secretKey, {
//     expiresIn: '7d', // Refresh token has a much longer expiration
//   });
  
//   // Hash the refresh token before storing it for security
//   const hashedToken = await bcrypt.hash(token, 10);
//   this.refreshToken = hashedToken;
  await this.save(); // Save the document with the new token
  
  return token;
});

const UserModel = mongoose.model('user',UserSchema)

export {UserModel}