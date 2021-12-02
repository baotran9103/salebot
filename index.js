require("dotenv").config();
const solanaWeb3 = require("@solana/web3.js");

const { Connection, programs } = require("@metaplex/js");

const axios = require("axios");

if (!process.env.PROJECT_ADDRESS) {
  console.log("please set env variables");
}
const projectPubKey = new solanaWeb3.PublicKey(process.env.PROJECT_ADDRESS);
const url = solanaWeb3.clusterApiUrl("mainnet-beta");
const solanaConnection = new solanaWeb3.Connection(url, "confirmed");
const metaplexConnection = new Connection("mainnet-beta");
const {
  mtadata: { Metadata },
} = programs;
const pollingInterval = 2000;
