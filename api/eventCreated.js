const { LockCreated, LockIncremented, LockExtended, LockWithdrawn, OwnerChanged } = require('./models/EventModels');


module.exports = async function(req, res) {
  try {
    if (req.method === 'POST') {
      const eventData = req.body; 

      let eventModel;
      switch (eventData.topic0) {
        case lockCreatedHash:
          eventModel = LockCreated;
          break;
        case lockIncrementedHash:
          eventModel = LockIncremented;
          break;
        case lockExtendedHash:
          eventModel = LockExtended;
          break;
        case lockWithdrawnHash:
          eventModel = LockWithdrawn;
          break;
        case ownerChangedHash:
          eventModel = OwnerChanged;
          break;
        default:
          return res.status(400).send('Unknown event type');
      }

      const newEvent = new eventModel(eventData);
      await newEvent.save();

      res.status(200).json({ message: 'Event data saved successfully' });
    } else {
      res.status(405).send('Method Not Allowed');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const lockCreatedHash ='f9bda92ea74b71a4a1fdcc787b7b988e856e27ebf779e1e3c4d45092d83c99c9';
const lockIncrementedHash ='5f5b89a2d80bea12cd11c2e4fd9952e0271df26e92158c35b5b31c776103ee81';
const lockExtendedHash ='a0484007ba4c1db933b93c006320d131ad5254f24eb5645ca70fc2b9bd75ca4e';
const lockWithdrawnHash ='5ff743b4ace5eb98189daf5a9a96ca31ad3b4a85ac49ee47898a3c808185450d';
const ownerChangedHash ='ca51f297ce0467b9f225385d5a84e6d6eca77eee4a0972481fdf8c240b3e3713';