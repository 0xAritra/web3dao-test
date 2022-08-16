import sdk from "./1-initialize-sdk.js"
import { readFileSync } from "fs"

const editionDrop = sdk.getEditionDrop(
    "0x8470fAb411cba7c82B35Ac110E3b30b7eD50BdaF"
)

;(async () => {
    try {
        editionDrop.createBatch([
            {
                name: "Web3DAO Member",
                description: "gives access to Web3DAO",
                image: readFileSync("scripts/assets/member.png"),
            },
        ])
        console.log("🗸 NFT added to the drop!")
    } catch (e) {
        console.error(e)
    }
})()
