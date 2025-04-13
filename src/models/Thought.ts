import { Schema, model, Document, ObjectId } from 'mongoose';

interface IThought extends Document {
    assignmentId: Schema.Types.ObjectId,
    name: string,
    score: number
}

const thoughtSchema = new Schema<IThought>(
    {
        assignmentId: {
            
        },
        name: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 4,
            default: 'Unnamed assignment',
        },
        score: {
            type: Number,
            required: true,
            default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
        },
    },
    {
        timestamps: true,
        _id: false
    }
);




Thought

thoughtText

String
Required
Must be between 1 and 280 characters
createdAt

Date
Set default value to the current timestamp
Use a getter method to format the timestamp on query
username (The user that created this thought)

String
Required
reactions (These are like replies)

Array of nested documents created with the reactionSchema