const Web3 = require('web3');
const contractABI = require('NGO.json');
const contractAddress = '0xa1B0d2bDa4Cebf857A73dbDF4286fBE4085a5D04';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const myContract = new web3.eth.Contract(contractABI, contractAddress);

myContract.methods.myFunction().call((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
