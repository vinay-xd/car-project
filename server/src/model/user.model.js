import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'admin'],
            require: true
        }, 
        email: {
            type: String,
            require: true,
            trim: true
        },
        password: {
            type: String,
            require: true
        },
        verified : {
            type: Boolean,
            default: false,
            require: true
        },
        wishlist: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'car'
                }
        ]

    }, {timestamps: true})


    userSchema.methods.genratetoken = function () {
        try {
            return jwt.sign(
                {
                    userId : this._id.toString(),
                    email: this.email
                },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: '10d'
                }
            )
        } catch (error) {
            console.log('token not generated', error);
        }
    }

export const User = mongoose.model('User', userSchema)