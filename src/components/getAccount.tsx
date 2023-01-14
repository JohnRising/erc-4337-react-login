import { ethers } from "ethers";
import { getSimpleAccount } from "./getSimpleAccount";
import keccak256 from "keccak256"

const getAccount = async (config: any) => {
    console.log("getAccount")

    const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
    const accountAPI = getSimpleAccount(
        provider,
        config.signingKey,
        config.entryPoint,
        config.simpleAccountFactory
    );
    const address = await accountAPI.getCounterFactualAddress();
    const wallet = ethers.Wallet.createRandom()

    // returns public key of the EOA, an encrypted private key, and the address of the smart contract account
    return {
        publicKey: wallet.address,
        encryptedPrivateKey: keccak256(wallet.privateKey),
        smartContractAddress: address}
}

export default getAccount