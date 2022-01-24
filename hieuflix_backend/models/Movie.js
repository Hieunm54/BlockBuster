import mongoose from 'mongoose';
const {Schema} = mongoose;

const MovieSchema = new Schema({
    title: { type: String, required: true, unique: true},
    description: { type: String,},
    img: { type: String,},
    imgTitle: { type: String},
    thumnail: { type: String},
    trailer: { type: String},
    video: { type: String,},
    year: { type: String},
    limit: { type: String},
    genre: { type: String},
    isSeries: { type: Boolean, default: false}

}, { 
    timestamps: true,
})

export default mongoose.model('Movie',MovieSchema) 