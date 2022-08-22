const ethers = require('ethers')

const abi = require('./abis/erc677.json')
const address = '0x2B3f3b86D238eFd9672331eff6aC19bCf1C6fD60';

const provider = new ethers.providers.JsonRpcProvider("https://chain.decommerce.com");

const walletProvider = new ethers.Wallet('a89f7c61ccb1b23530a4176314feda0d4a9589dd570b46af9bfeb74180dca41e', provider)

const homeToken = new ethers.Contract(address, abi.abi, walletProvider);


async function main() {
    
    // const result = await walletProvider.getChainId()
    // console.log('chain id', result)
    // const result = await homeAMB.executeAffirmation("0x000500002271068521f30b2566b424b972733ac2d6c933a80000000000000001699402305bf0ce9b67a15edde3d4c2e45decc62cd26a5df2f08d7b94481e2da0d5453bbb6dfee3a30007a1200102000422538b6c03540000000000000000000000006182a3ad5985b5c0a96a426e8afec92750a506590000000000000000000000000000000000000000000000000de0b6b3a7640000");
    const result = await homeToken.transferAndCall("0xe8bfd2447b26232eb6f53794d2d920233a87e0d6", ethers.BigNumber.from("1000000000000000000"), ethers.utils.solidityPack(['address'], ["0x6182A3aD5985B5c0a96a426E8aFec92750a50659"]));

    console.log('transfer result', result);
}

main()



