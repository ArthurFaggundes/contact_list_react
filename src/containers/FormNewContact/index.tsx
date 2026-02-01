import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addNewTask } from '../../store/reducers/tasks' // importando função
import {
  MainContainer,
  ReturnButton,
  SaveButton,
  Title,
  SearchInput
} from '../../styles/index'
import { FormContainer } from './styles'

const FormNewContact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [fullName, setfullName] = useState('')
  const [mail, setMail] = useState('')
  const [cellNumber, setCellNumber] = useState('')

  const addNewContact = (e: FormEvent) => {
    e.preventDefault()

    const validFullName = fullName.trim().length > 0
    const validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
    const validCellNumber = /^\(\d{2}\)\s\d{5}-\d{4}$/.test(cellNumber)

    if (!validFullName || !validMail || !validCellNumber) {
      alert('Please fill in all fields correctly!')
      return
    }

    dispatch(
      addNewTask({
        fullName,
        mail,
        cellNumber
      })
    )
    navigate('/')
  }

  const formatCellNumber = (value: string) => {
    // Remove tudo que não for número
    let onlyNumbers = value.replace(/\D/g, '')

    // Limita a 11 dígitos
    if (onlyNumbers.length > 11) {
      onlyNumbers = onlyNumbers.slice(0, 11)
    }

    // Aplica a máscara (00) 00000-0000
    return onlyNumbers
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }

  return (
    <>
      <MainContainer>
        <Title>New Contact</Title>
        <FormContainer onSubmit={addNewContact}>
          <SearchInput
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            placeholder="Insert your full name"
            type="text"
          />
          <SearchInput
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="exemple@gmail.com"
            type="mail"
          />
          <SearchInput
            value={cellNumber}
            onChange={(e) => setCellNumber(formatCellNumber(e.target.value))}
            placeholder="(00) 00000-0000"
            type="tel"
          />
          <SaveButton type="submit">Save</SaveButton>
          <ReturnButton onClick={() => navigate(-1)}>Voltar</ReturnButton>
        </FormContainer>
      </MainContainer>
    </>
  )
}
export default FormNewContact
