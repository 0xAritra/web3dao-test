import { AddressZero } from "@ethersproject/constants"
import sdk from "./1-initialize-sdk.js"
import { readFileSync } from "fs"
;(async () => {
    try {
        const meta = {
            name: "Web3DAO Membership",
            description: "A DAO for Web3 buidlers",
            image: readFileSync("scripts/assets/web3dao.png"),
            primary_sale_recipient: AddressZero,
        }
        const editionDropAddress = await sdk.deployer.deployEditionDrop(meta)
        const editionDrop = await sdk.getEditionDrop(editionDropAddress)
        const metadata = await editionDrop.metadata.get()
        console.log("🗸 editionDrop address: ", editionDropAddress)
        console.log("🗸 editionDrop metadata: ", metadata)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
})()
