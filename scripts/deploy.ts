import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0xa5ef651caf0279d13459d801f6666c6e662426f1',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'BATODY', // _name
        'BATO',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
