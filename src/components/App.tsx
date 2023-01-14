import React from 'react'
import { ethers } from "ethers";
import {getSimpleAccount} from "./getSimpleAccount";

// const GoogleLogin = () => {
//     return (
//         <div>
//             <h1>GoogleLogin:</h1>
//         </div>
//     )
// }

const helloWorld = (config: any) => {
    console.log("Hello World!")

    // console.log("Buffer:", Buffer)
    
    async function main() {
        const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
        const accountAPI = getSimpleAccount(
          provider,
          config.signingKey,
          config.entryPoint,
          config.simpleAccountFactory
        );
        const address = await accountAPI.getCounterFactualAddress();
    
        console.log(`SimpleAccount address: ${address}`);
    }
    
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}

// export default GoogleLogin
export default helloWorld