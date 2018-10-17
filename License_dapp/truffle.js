require("babel-register")({
  ignore: /node_modules\/(?!zeppelin-solidity)/
});
require("babel-polyfill");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "9EA68F87CAA95E333C938461FA7274C1D092478CA14FEFC40720960B11358CD7"; // raw private key
const infura_api = "c4XYujMRtM9w5yfojsAb";
// const mnemonic = process.env.MNEMONIC
// const infura_api = process.env.INFURA_API
// const network_id = process.env.NETWORK_ID

module.exports = {
 

  networks: {
    'development': {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
    },
    ropstengeth: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "3"
   },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_api)
      },
      network_id: "*",
      gas:4712388,
      gasPrice: 10000000000
    }
  },
  solc: {
  optimizer: {
    enabled: true,
    runs: 200
  }
}

};
// require('babel-register')

// const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
// const privKey = "9EA68F87CAA95E333C938461FA7274C1D092478CA14FEFC40720960B11358CD7"; // raw private key
// const infuraKey = "c4XYujMRtM9w5yfojsAb";

// //0xb61e0fedec42ad205f1af4ad5fc9e75e408f4e10: Contract Address
// module.exports = {

//   solc: {
//         optimizer: {
//           enabled: true,
//           runs: 200
//         }
//   },
//   networks: {
//     development: {
//       host: '127.0.0.1',
//       port: 7545,
//       network_id: '*',
//       //gas: 8000000,   // <--- Twice as much
      
//     },
//     ropsten: {
//       provider: function() {
//         return new HDWalletProvider(privKey, "https://ropsten.infura.io/"+infuraKey);
//       },
//       network_id: 3,
//       gas: 4700000,   // <--- Twice as much
//       gasPrice: 10000000000
//       //gasPrice: web3.toWei('10','gwei')

//      }
//     // mainnet: {
//     //   provider: function() {
//     //     return new HDWalletProvider(privKey, constants.INFURA_ENDPOINT+infuraKey);
//     //   },
//     //   network_id: 1,
//     //   gas: 4700000,   // <--- Twice as much
//     //   gasPrice: 10000000000
//     //   //gasPrice: web3.toWei('10','gwei')

//     // }

//   }
// }