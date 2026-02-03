import styled, { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: Roboto, sans-serif; }
  ul { list-style: none; }
`
export const Container = styled.div`
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  background-color: #130f40;
  padding: 40px 40px;
  height: 100vh; // barra de rolagem só vai ter no main
  overflow-y: scroll;
`

export const Title = styled.h2`
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.gray};
`

export const InfoInput = styled.input`
  background-color: #fff;
  color: #666;
  border-color: #666;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px;
  width: 100%;
  margin-bottom: 16px;
`

export const Button = styled.button`
  color: #fff;
  background-color: #2f3640;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
`

export const ReturnButton = styled(Button)`
  color: #fff;
  background-color: ${colors.darkGray};
  border-radius: 8px;
  border: none;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;
`

export const SaveButton = styled(Button)`
  background-color: ${colors.green};
  border-radius: 8px;
  border: none;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;
`

export default GlobalStyle
