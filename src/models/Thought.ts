import { Schema, model, type Document } from 'mongoose';
import reactionSchema from "./Reaction.js";
import getFormatDate from "../utils/timestamp.js"

interface IThought extends Document {
    thoughttext: string,
    createdate: Schema.Types.Date,
    username: string,
    reactions: [typeof reactionSchema]
}

const thoughtSchema = new Schema<IThought>(
    {
        thoughttext: {
            type: String,
            required: true,
            maxlength: 180,
            minlength: 1,

        },
        createdate: {
            type: Date,
            default: Date.now,
            get: (timestamp:any) => getFormatDate(timestamp)
            
        },
        username: {
            type: String,
            required: true,
            
        },
        reactions: [
            reactionSchema
        ]
          

        
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

const Thought = model<IThought>('User', thoughtSchema);

export default Thought;



