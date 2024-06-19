const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x2211c1D6485a3A246Afa91A3B53eC6D5f4ef5E24';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  const upgradedOwner = await upgraded.owner();

  console.log("The current contract owner is: " + upgradedOwner);
  console.log('Implementation contract address: ' + implementationAddress);
}

main();

/**
 * The current contract owner is: 0xc7d6222D44cE0d0E375aAbF86144C938699B867F
 * Implementation contract address: 0xC581bC379DFE500D5e6649F130F4fB03f14e07cA
 */