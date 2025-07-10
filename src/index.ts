import { createConfig, http, readContract } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { l2GraphTokenAbi } from '@graphprotocol/interfaces/wagmi'
import { IL2GraphToken__factory } from '@graphprotocol/interfaces/types-v5'

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})


async function main() {
  // wagmi
  const result = await readContract(
    config, {
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: l2GraphTokenAbi,
    functionName: 'balanceOf',
    args: ['0x0000000000000000000000000000000000000000'],
  });

  console.log(result);

  // ethers-v5
  const l2GraphToken = IL2GraphToken__factory.connect('0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', config.chains[0].rpcUrls.default.http[0])
  const result2 = await l2GraphToken.balanceOf('0x0000000000000000000000000000000000000000')
  console.log(result2)
}

main();

