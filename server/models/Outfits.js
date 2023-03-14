const mongoose = require('mongoose');

const OutfitSchema = new mongoose.Schema({
    description: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Outfit', OutfitSchema);
