import styled from 'styled-components'

export const FormContainer = styled.form`
  color: #535c68;
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const OptionsContainer = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
