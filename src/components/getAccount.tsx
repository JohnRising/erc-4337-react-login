import { ethers } from "ethers";
import { getSimpleAccount } from "./getSimpleAccount";

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

    console.log(`SimpleAccount address: ${address}`);

    return address
}

export default getAccount