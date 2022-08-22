const ethers = require('ethers')

const abi = require('./abis/affyn.json')
const address = '0x2b70C7f5641f685e19E963636D8bd65DaA20711A';

const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

const walletProvider = new ethers.Wallet('d5b63f3e2ddd3e94328f07e14be68dbb25b802bfa642643c517c349302a4f030', provider)

const affynNFT = new ethers.Contract(address, abi, walletProvider);


async function main() {
    // const result = await erc20.mintForUser('0x6182A3aD5985B5c0a96a426E8aFec92750a50659', ethers.utils.parseEther('10'));
    // console.log('mint for user', result);
    const chainID = await walletProvider.getChainId();
    console.log('chain id', chainID)
    // const result = await affynNFT.mintNFT(1, 1);
    // console.log('result : ', result)
}

main()



