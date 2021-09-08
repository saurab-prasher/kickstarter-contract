const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'average capital horror upgrade awkward shop young focus sponsor away ozone dynamic',
  'https://rinkeby.infura.io/v3/da1d81894e254e5ca08a4b4ae5a4c641'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Deploying contract from account', accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address);
};

deploy();
