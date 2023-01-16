import { useState, useEffect, useCallback } from 'react';
import { ethers, BigNumber } from 'ethers';
import twelveKnights from "./12Knights.json"
import styles from "/styles/Landingpage/Body.module.css"

//import whitelist.js as down below
const whitelist = require('./whitelist.js')

const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

const twelveKnightsAddress = "0x77a70CC2a6768BDb702c7EA6817be07efa0F464D";

const wladdresses = ["0xd063e306640001149aEFC501EC4143893e450505","0xeF9687656f74A6371400987c4174E0e674e6b2d1","0x2DA3FfAc8F952b0c2031AAa3B1aE7ec2Ab0FbB28","0xcbcd6DFC033c6d8E04b9F97f91BC308D869632C3","0xeABEadd2BdE2B2b4Fa2BA1864Be409E6ef868326","0xEC1E4C5a130549f25287f15Ba08D0D30Bdf18eD3","0x0000001248931945832057348579384579435792","0x2348752347501888888888888888888751738751","0x71C7656EC7ab88b098defB751B7401B5f6d8976F","0xA0Ce9C4f2d25a5a93A5B91fEf9ED5c4f756a1402","0x5dB3FdfEE5E2331d9eED0FbDA40152bC94c21114","0x1dAbAb4A73a6B75d265CCba7b4DC0319CBE9BdEA","0x5B38Da6a701c568545dCfcB03FcB875f56beddC4","0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"]

const WhitelistMint = () => {

      // Connect Functions
      const [account, setAccount ] = useState(null);
      const connectAccount = useCallback(async () => {
            if(window.ethereum) {
                  const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                  });
                  setAccount(accounts[0]);
            }
      }, [setAccount]);

      useEffect(() => {
            connectAccount();
      }, [connectAccount]);

      // Minting Functions
      const [mintAmount, setMintAmount] = useState(1);

      async function handleMint() {
            if (account){
                  // Calculate merkle root from the whitelist array
		const leafNodes = whitelist.map((addr) => keccak256(addr));
		const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
		const root = merkleTree.getRoot();
		
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		//caclucate poof
		const leaf = keccak256(signer)
		const proof = merkleTree.getHexProof(leaf)
                  const contract = new ethers.Contract(
                        twelveKnightsAddress,
                        twelveKnights.abi,
                        signer
                  );
                  try {
                        const value = ethers.utils.parseEther(`0.0001`).mul(mintAmount);
                        console.log(value)
                        const response = await contract.whitelistMint(BigNumber.from(mintAmount), proof);

                        console.log("Minting completed: ",response);
                  } catch (err) {
                        console.log(err);
                  }
            }
      }
      

        
      const handleDecrement = () => {
            if(mintAmount <= 1) return;
            setMintAmount(mintAmount - 1);
      }
      const handleIncrement = () => {
            if(mintAmount >= 10) return;
            setMintAmount(mintAmount + 1);
      }

      return(
        <>
        {account && (
            <div className={styles.whitelistMintFunction}>
                  <h2>Whitelist Mint</h2>
                  <p>Connected Account: {account}</p> 
                  <>
                  <div className={styles.mintContainer}>
                        <div className={styles.mintAmount}>
                              <button onClick={handleDecrement}>-</button>
                              <span>{mintAmount}</span>
                              <button onClick={handleIncrement}>+</button>
                        </div>
                        <button className={styles.mintButton} onClick={handleMint}>Mint</button>
                  </div>
                  </>
            </div>
        )}
        {!account && (
            <div>
                  <h2>Whitelist Mint</h2>
                  <p>Please connect your wallet</p>
            </div>
        )}
        </>
      )
};

export default WhitelistMint;

[0x5931b4ed56ace4c46b68524cb5bcbf4195f1bbaacbe5228fbd090546c88dd229,0xb28a8703011bf5cd8b86d16a563d00e50222c311b0ae82234bba027654aadbc3,0xd86868c665b8e34defaef5c57954257dbc66f3346c4047efb8f8c456ac72d345] // so muss der fertige string aussehen der an den smart contract geht

["0xce77f282bbdd21a2eb0cf9cd8f0717b39f0a483fdadd3cd41ea9de39ff71f68a","0x5b899b8d9c0e94d433f3faac8892ab7a5e2ec32968e599f38a9b72bf7aa38419","0xea00d5d3737195af5ccf1770bfc1d804bd1524b7c55c38f7623003f8bfe2ed59","0xd86868c665b8e34defaef5c57954257dbc66f3346c4047efb8f8c456ac72d345"]
