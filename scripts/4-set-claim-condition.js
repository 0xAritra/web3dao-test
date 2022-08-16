import sdk from "./1-initialize-sdk.js"
import { MaxUint256 } from "@ethersproject/constants"

const editionDrop = sdk.getEditionDrop(
    "0x8470fAb411cba7c82B35Ac110E3b30b7eD50BdaF"
)

;(async () => {
    try {
        const claimConditions = [
            {
                startTime: new Date(),
                maxQuantity: 10000,
                price: 0,
                quantityLimitPerTransaction: 1,
                waitInSeconds: MaxUint256,
            },
        ]
        await editionDrop.claimConditions.set("0", claimConditions)
        console.log("✅ Successfully set claim condition!")
    } catch (error) {
        console.error(error)
    }
})()
