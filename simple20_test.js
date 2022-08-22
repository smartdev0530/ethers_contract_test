const ethers = require('ethers')

const abi = require('./abis/simpleERC20.json')
const address = '0xD5f1cC0264d0E22BE4488109dbf5d097eb37a576';

const provider = new ethers.providers.JsonRpcProvider("http://152.89.247.124:8545");

const walletProvider = new ethers.Wallet('a89f7c61ccb1b23530a4176314feda0d4a9589dd570b46af9bfeb74180dca41e', provider)

const erc20 = new ethers.Contract(address, abi, walletProvider);


async function main() {
    // const result = await erc20.mintForUser('0x6182A3aD5985B5c0a96a426E8aFec92750a50659', ethers.utils.parseEther('10'));
    // console.log('mint for user', result);
    const result = await walletProvider.getChainId()
    console.log('chain id', result)
}

main()



