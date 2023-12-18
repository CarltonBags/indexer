const mongoose = require('mongoose');

// Schema for the raw event data
const rawEventDataSchema = new mongoose.Schema({
  rawData: {
    type: mongoose.Schema.Types.Mixed, // Using Mixed type to store any data structure
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set to the current date and time
  }
  // You can add additional fields if needed, like identifiers, tags, etc.
});

// Create the model from the schema
const RawEventDataModel = mongoose.model('RawEventData', rawEventDataSchema);

module.exports = RawEventDataModel;
