const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web(ganache.provider());

const compiledFactory = require('../build/CampaignFactory.json');
const compiledCampaign = require('../build/Campaign.json');

let accounts;
