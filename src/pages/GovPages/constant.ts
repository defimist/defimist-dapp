import { ChainId, Currency } from 'defimist-sdk'
import { DMT, USDC, USDT, WBTC } from '../../constants'

export const MainPage = 'Governance Main Page'
export const PairPage = 'Governance Pair Page'

export const temporaryCurrencyData: Array<Currency> = [
  DMT,
  USDC[ChainId.MAINNET],
  USDT[ChainId.MAINNET],
  WBTC[ChainId.MAINNET]
]
