const mongoose = require('mongoose');

const uri = "mongodb+srv://houseofnobody17:" + process.env.mongopw + "@locker.em572eq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

module.exports = mongoose;
