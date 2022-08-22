const ethers = require("ethers");

const abi = require("./abis/NativeHomeBridge.json");
const address = "0xc24d67928ab6d17ca627dfD19F506581c35703Dd";

const provider = new ethers.providers.JsonRpcProvider(
  "https://chain.decommerce.com"
);

const walletProvider = new ethers.Wallet(
  "c98752ac1d927663d43aa0ba6f031bc9cc555081ad7b03dcf7ed46ef931ad822",
  provider
);

const homeBridgeContract = new ethers.Contract(address, abi, walletProvider);

// console.log('blockReward contract', blockReward);

async function main() {
  const bridgeResult = await homeBridgeContract.executeAffirmation(
    "0x233fffec7773F45F78FBaDcF55155d417496126e",
    ethers.BigNumber.from("10000000000000000000"),
    "0x0897d229022b9d91597116c577b4b8b1b8de1fb118701ab4225b4eaf26cd9af5"
  );

  console.log('bridge result', bridgeResult);
}

main();
