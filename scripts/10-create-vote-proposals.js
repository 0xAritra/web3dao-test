import sdk from "./1-initialize-sdk.js"
import { ethers } from "ethers"

const vote = sdk.getVote("0xcFA3692155e7da60b9FA30368E975aCbDdee022f")
const token = sdk.getToken("0xFe6AA73a4F598EC0720a63673f492FeF0D02c152")

;(async () => {
    try {
        const amount = 100000
        const description =
            "Should DAO mint an additional " + amount + "into the treasury?"

        const execution = [
            {
                toAddress: token.getAddress(),
                nativeTokenValue: 0,
                transactionData: token.encoder.encode("mintTo", [
                    vote.getAddress(),
                    ethers.utils.parseUnits(amount.toString(), 18),
                ]),
            },
        ]

        await vote.propose(description, execution)
        console.log("Successfully proposed minting of tokens")
    } catch (e) {
        console.error("couldn't create minting proposal", e)
    }

    try {
        const amount = 6900
        const description =
            "Should the DAO transfer " +
            amount +
            " tokens from the treasury to " +
            process.env.WALLET_ADDRESS +
            " for being awesome?"

        const execution = [
            {
                toAddress: token.getAddress(),
                nativeTokenValue: 0,
                transactionData: token.encoder.encode("transfer", [
                    process.env.WALLET_ADDRESS,
                    ethers.utils.parseUnits(amount.toString(), 18),
                ]),
            },
        ]

        await vote.propose(description, execution)
        console.log(
            "Successfully created proposal to reward ourselves from the treasury"
        )
    } catch (e) {
        console.error("failed to create proposal to reward myself ded", e)
    }
})()
