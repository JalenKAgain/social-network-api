import { Schema, model, type Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts: Schema.Types.ObjectId[]
    friends: Schema.Types.ObjectId[]
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /([a-z0-9+._-]+])@([a-z0-9_-]+]).([a-z]+)/
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],


    },





    {
        toJSON: {
            virtuals: true,
        }
    }
);

userSchema.virtual('friendcount').get(function () {
    return `${this.friends.length}`;
});


const User = model<IUser>('User', userSchema);

export default User;








