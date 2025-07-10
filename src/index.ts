import { createConfig, http, readContract } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { l2GraphTokenAbi } from '@graphprotocol/interfaces/wagmi'

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})


async function main() {
  const result = await readContract(
    config, {
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: l2GraphTokenAbi,
    functionName: 'balanceOf',
    args: ['0x0000000000000000000000000000000000000000'],
  });

  console.log(result);
}

main();

