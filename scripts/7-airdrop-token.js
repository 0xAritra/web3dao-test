import sdk from "./1-initialize-sdk.js"

const editionDrop = sdk.getEditionDrop(
    "0x8470fAb411cba7c82B35Ac110E3b30b7eD50BdaF"
)

const token = sdk.getToken("0xFe6AA73a4F598EC0720a63673f492FeF0D02c152")

;(async () => {
    try {
        const walletAddresses =
            await editionDrop.history.getAllClaimerAddresses(0)

        if (walletAddresses.length === 0) {
            console.log("No Members :( - ask friends")
            process.exit(0)
        }

        const airdropTargets = walletAddresses.map((address) => {
            // (1000, 10000]
            const randomAmount = Math.floor(
                Math.random() * (10000 - 1000) + 1000
            )
            console.log("Goint to airdrop", randomAmount, "to", address)
            const airdropTarget = {
                toAddress: address,
                amount: randomAmount,
            }

            return airdropTarget
        })

        console.log("Starting Airdrop...")
        await token.transferBatch(airdropTargets)
        console.log("Airdropped!")
    } catch (e) {
        console.error("airdrop failed!", e)
    }
})()
