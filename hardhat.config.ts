require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
import * as dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.API_KEY;

module.exports = {
    zksolc: {
        version: "1.2.0",
        compilerSource: "binary",
        settings: {
            optimizer: {
                enabled: true,
            },
            experimental: {
                dockerImage: "matterlabs/zksolc",
                tag: "v1.2.0",
            },
        },
    },
    zkSyncDeploy: {
        zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
        ethNetwork: `https://eth-goerli.g.alchemy.com/v2/${API_KEY}`, // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
    },
    networks: {
        hardhat: {
            zksync: true,
        },
    },
    solidity: {
        version: "0.8.16",
    },
};