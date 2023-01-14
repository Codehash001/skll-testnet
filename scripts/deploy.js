const hre = require('hardhat')

const _initBaseURI='ipfs://QmYG397NbS5FLxNbo2oavBSSid5MwJ6jXidxpDgQgDdJL9/'

async function main() {

  // Deploy the contract
  const skll = await hre.ethers.getContractFactory('SKLL')
  const SKLL = await skll.deploy(
    _initBaseURI)
  await SKLL.deployed()

  console.log('SKLL deployed to:', SKLL.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
