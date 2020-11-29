const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    massage:{
        type:String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now
    }
})

const Massage = mongoose.model("massage", schema)

module.exports = Massage