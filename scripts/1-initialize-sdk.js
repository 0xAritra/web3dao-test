import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import ethers from "ethers"
import dotenv from "dotenv"
dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const WALLET_ADDRESS = process.env.WALLET_ADDRESS

if (!PRIVATE_KEY) {
    console.log("⚠ No Private Key")
}

if (!ALCHEMY_API_URL) {
    console.log("⚠ No Alchemy API URL")
}

if (!WALLET_ADDRESS) {
    console.log("⚠ No Wallet Address")
}

const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_API_URL)
const wallet = new ethers.Wallet(PRIVATE_KEY, provider)
const sdk = new ThirdwebSDK(wallet)

;(async () => {
    try {
        const address = await sdk.getSigner().getAddress()
        console.log("SDK initialized by address:", address)
    } catch (e) {
        console.log(e)
    }
})()

export default sdk
