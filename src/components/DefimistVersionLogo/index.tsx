import React from 'react'
import styled from 'styled-components'
import logoImage from '../../assets/images/defimist-logo.png'
import { version } from '../../../package.json'

const Logo = styled.img.attrs({ src: logoImage })``

const RelativeContainer = styled.div`
  position: relative;
`

const Badge = styled.div`
  position: absolute;
  bottom: -4px;
  right: 0;
  background: ${({ theme }) => theme.bg3};
  padding: 3px 4px;
  color: ${({ theme }) => theme.text1};
  border-radius: 4px;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  display: none;
`

function DefimistVersionLogo() {
  return (
    <RelativeContainer>
      <Logo />
      <Badge>{version}</Badge>
    </RelativeContainer>
  )
}

export default DefimistVersionLogo
