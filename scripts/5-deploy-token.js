import { AddressZero } from "@ethersproject/constants"
import sdk from "./1-initialize-sdk.js"
;(async () => {
    try {
        const tokenAddress = await sdk.deployer.deployToken({
            name: "Web3DAO Governance Token",
            symbol: "WEB3DAO",
            primary_sale_recipient: AddressZero,
        })

        console.log("Token deployed successfully, address:", tokenAddress)
    } catch (e) {
        console.error("Deploying token failed!", e)
    }
})()
