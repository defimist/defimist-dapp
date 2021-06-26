import { ChainId, STAKING_REWARDS_FACTORY_ADDRESS } from 'defimist-sdk'

if (
  !process.env.REACT_APP_STAKING_REWARDS_FACTORY_ADDRESS_MAINNET ||
  !process.env.REACT_APP_STAKING_REWARDS_FACTORY_ADDRESS_DM
)
  throw new Error('missing env variables')

STAKING_REWARDS_FACTORY_ADDRESS[ChainId.MAINNET] = process.env.REACT_APP_STAKING_REWARDS_FACTORY_ADDRESS_MAINNET
STAKING_REWARDS_FACTORY_ADDRESS[ChainId.DM] = process.env.REACT_APP_STAKING_REWARDS_FACTORY_ADDRESS_DM
