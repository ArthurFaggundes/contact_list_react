import styled from 'styled-components'
import colors from '../../styles/colors'

import { Button } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;

    input {
      margin-right: 8px;
    }
  }
`

export const FullNameInput = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const InfoInput = styled.input`
  color: #8b8b8b;
  background-color: transparent;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const RemoveButton = styled(Button)`
  background-color: ${colors.red};
`
