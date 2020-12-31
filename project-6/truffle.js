const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "97f1bb79d7a547b49e3eee4248d87268";

const mnemonic = "<<Something>>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/`+infuraKey),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  },
  compilers: {
    solc: {
      version: "0.4.25"
    }
  }
};