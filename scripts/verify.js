require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')

const _initBaseURI='ipfs://QmYG397NbS5FLxNbo2oavBSSid5MwJ6j/'


async function main() {

  await hre.run('verify:verify', {
    address: '0x31Ac6d1061C3b9CE1AC5476909BC55eB94375452',
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
