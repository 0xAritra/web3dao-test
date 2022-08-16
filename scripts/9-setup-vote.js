import sdk from "./1-initialize-sdk.js"

const vote = sdk.getVote("0xcFA3692155e7da60b9FA30368E975aCbDdee022f")
const token = sdk.getToken("0xFe6AA73a4F598EC0720a63673f492FeF0D02c152")

;(async () => {
    try {
        await token.roles.grant("minter", vote.getAddress())
        console.log("Granted vote contract access to token contract")
    } catch (err) {
        console.error("failed to give vote access to token")
        process.exit(1)
    }

    try {
        const ownedTokenBalance = await token.balanceOf(
            process.env.WALLET_ADDRESS
        )
        const ownedAmound = ownedTokenBalance.displayValue
        const percent90 = (Number(ownedAmound) / 100) * 90

        await token.transfer(vote.getAddress(), percent90)
        console.log(
            "Successfully sent",
            percent90,
            "to vote contract",
            vote.getAddress()
        )
    } catch (err) {
        console.error("failed to send amount", err)
    }
})()
