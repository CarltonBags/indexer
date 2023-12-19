const mongoose = require('mongoose');

const lockCreatedSchema = new mongoose.Schema({
  dexRouter: String,
  pair: String,
  referrer: String,
  owner: String,
  unlockTime: Number,
  amount: Number,
  lockIndex: Number,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

const lockIncrementedSchema = new mongoose.Schema({
  pair: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now }
});

const lockExtendedSchema = new mongoose.Schema({
  pair: String,
  unlockTime: Number,
  createdAt: { type: Date, default: Date.now }
});

const lockWithdrawnSchema = new mongoose.Schema({
  pair: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now }
});

const ownerChangedSchema = new mongoose.Schema({
  pair: String,
  oldOwner: String,
  newOwner: String,
  createdAt: { type: Date, default: Date.now }
});

const LockCreated = mongoose.model('LockCreated', lockCreatedSchema);
const LockIncremented = mongoose.model('LockIncremented', lockIncrementedSchema);
const LockExtended = mongoose.model('LockExtended', lockExtendedSchema);
const LockWithdrawn = mongoose.model('LockWithdrawn', lockWithdrawnSchema);
const OwnerChanged = mongoose.model('OwnerChanged', ownerChangedSchema);

module.exports = { LockCreated, LockIncremented, LockExtended, LockWithdrawn, OwnerChanged };
