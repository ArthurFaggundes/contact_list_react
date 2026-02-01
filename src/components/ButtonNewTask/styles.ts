import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

export const Circle = styled(Link)`
  background-color: ${colors.green};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`
