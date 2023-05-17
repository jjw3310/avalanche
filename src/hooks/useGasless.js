import Web3 from "web3";
import * as ethUtil from "ethereumjs-util";
import readFile from "fs";

export async function useGasless() {
  const FORWARDER_ABI = JSON.parse(
    await readFile(new URL("./Forwarder.json", import.meta.url))
  );

  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.EVM_CHAIN_RPC_URL)
  );
  const forwarderContract = new web3.eth.Contract(
    FORWARDER_ABI.abi,
    process.env.TRUSTED_FORWARDER_CONTRACT_ADDRESS
  );

  ethUtil.bnToHex(
    Number(
      await forwarderContract.methods
        .getNonce(process.env.MY_WALLET_EVM_ADDRESS)
        .call()
    )
  );

  console.log("====FORWARDER_ABI====");
  console.log(FORWARDER_ABI);

  console.log("====Contract====");
  console.log(forwarderContract);
}
