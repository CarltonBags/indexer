const RawEventDataModel = require('./models/RawEventDataModel');

module.exports = async function(req, res) {
  try {
    if (req.method === 'POST') {
      // Assuming req.body contains the raw event data from QuickNode
      const rawData = req.body;

      // Create a new document with the raw data
      const newRawEvent = new RawEventDataModel({ rawData: rawData });
      await newRawEvent.save();

      res.status(200).json({ message: 'Raw data saved successfully' });
    } else {
      res.status(405).send('Method Not Allowed');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
