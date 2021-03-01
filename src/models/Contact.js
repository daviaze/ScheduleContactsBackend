const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const ContactSchema = new mongoose.Schema({
    fil: {
        type: Boolean,
        default: true
    },

    cod: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    tell01: {
        type: String,
        required: true,
    },
    tell02: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: false,
        default: "Pendente"
        },
   
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ContactSchema.plugin(mongoosePaginate);
mongoose.model('Contact', ContactSchema);
