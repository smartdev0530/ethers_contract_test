const ethers = require('ethers')

const abi = require('./abis/stark.json')
const address = '0x471bDA7f420de34282AB8AF1F5F3DAf2a4C09746';

const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

const walletProvider = new ethers.Wallet('a89f7c61ccb1b23530a4176314feda0d4a9589dd570b46af9bfeb74180dca41e', provider)

const stark = new ethers.Contract(address, abi, walletProvider);

async function main() {
    // const result = await erc20.mintForUser('0x6182A3aD5985B5c0a96a426E8aFec92750a50659', ethers.utils.parseEther('10'));
    // console.log('mint for user', result);
    // const result = await walletProvider.getChainId()
    const result = await stark.getAssetInfo('0x2761e6ac2b90cbef6f456a307e1715192da8eff78ceeb316a235e7cea822d71');

    console.log('asset type is ', result)
}

main()



