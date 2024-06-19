const { ethers, upgrades } = require('hardhat');

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.waitForDeployment();

  const proxyAddress = await proxy.getAddress();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log('Proxy contract address: ' + proxyAddress);

  console.log('Implementation contract address: ' + implementationAddress);
}

main();

/**
 * Proxy contract address: 0x2211c1D6485a3A246Afa91A3B53eC6D5f4ef5E24
 *Implementation contract address: 0x8E8Db4e6Fff6941545a6B2f6b779B3fefd2a346D
 */