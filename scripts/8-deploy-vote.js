import sdk from "./1-initialize-sdk.js"
;(async () => {
    try {
        const voteContractAddress = await sdk.deployer.deployVote({
            name: "Web3DAO Governance Voting",
            voting_token_address: "0xFe6AA73a4F598EC0720a63673f492FeF0D02c152",
            voting_delay_in_blocks: 0,
            voting_quorum_fraction: 51,
            proposal_token_threshold: 0,
            voting_period_in_blocks: 6570,
        })
        console.log("voting contract deployed, address:", voteContractAddress)
    } catch (err) {
        console.error("couldn't deploy voting contract", err)
    }
})()
