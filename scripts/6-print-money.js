import sdk from "./1-initialize-sdk.js"

const token = sdk.getToken("0xFe6AA73a4F598EC0720a63673f492FeF0D02c152")

;(async () => {
    try {
        const amount = 1000000
        await token.mintToSelf(amount)
        const totalSupply = await token.totalSupply()

        console.log(
            `Successfully set the supply to ${totalSupply.displayValue()} $WEB3DAO`
        )
    } catch (e) {
        console.error("couldn't set supply", e)
    }
})()
