import { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { removeContact, editContact } from '../../store/reducers/contactSlice' // funções de manipulação
import { Button, SaveButton } from '../../styles' // componentes estilizados
import ContactModel from '../../models/ContactModel'

type Props = ContactModel

const ContactComponent = ({
  fullName: originalFullName,
  mail: originalMail,
  cellNumber: originalCellNumber,
  id
}: Props) => {
  // ================================================================== declaração de estados e dispatch

  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const [fullName, setfullName] = useState('')
  const [mail, setMail] = useState('')
  const [cellNumber, setCellNumber] = useState('')

  // ================================================================== funções de manipulação de dados

  useEffect(() => {
    if (originalFullName.length > 0) {
      setfullName(originalFullName)
    }
  }, [originalFullName])

  useEffect(() => {
    if (originalMail.length > 0) {
      setMail(originalMail)
    }
  }, [originalMail])

  useEffect(() => {
    if (originalCellNumber.length > 0) {
      setCellNumber(originalCellNumber)
    }
  }, [originalCellNumber])

  // ================================================================== função para cancelar edição e transformar valores em originais

  function cancelEditing() {
    setIsEditing(false)
    setfullName(originalFullName)
    setMail(originalMail)
    setCellNumber(originalCellNumber.toString())
  }

  // ================================================================== função para verificar se os inputs são válidos

  const checkInputs = () => {
    if (!fullName.trim()) return false
    if (!mail.includes('@')) return false

    const CellNumberRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/
    if (!CellNumberRegex.test(cellNumber)) return false

    return true
  }

  // ================================================================== função para formatar/marcarar o número de celular

  const handleCellNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    let numberVar = e.target.value.replace(/\D/g, '') // remove tudo que não é número
    if (numberVar.length > 11) numberVar = numberVar.slice(0, 11) // limite de 11 dígitos

    // Aplica máscara (xx) x xxxx-xxxx
    numberVar = numberVar.replace(/^(\d{2})(\d)/, '($1) $2') // DDD + primeiro dígito
    numberVar = numberVar.replace(/(\d)(\d{4})$/, '$1-$2') // adiciona hífen antes dos últimos 4 dígitos

    setCellNumber(numberVar)
  }

  return (
    <S.Card>
      <S.FullNameInput
        as="input"
        type="text"
        placeholder="Nome"
        value={fullName}
        onChange={(evento: ChangeEvent<HTMLInputElement>) =>
          setfullName(evento.target.value)
        }
      />
      <S.InfoInput
        disabled={!isEditing}
        type="mail"
        value={mail}
        placeholder="Mail Adress"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setMail(e.target.value)
        }
      />
      <S.InfoInput
        disabled={!isEditing}
        type="tel"
        value={cellNumber}
        placeholder="Cellphone Number"
        onChange={handleCellNumberChange}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                if (!checkInputs()) {
                  alert('Please fill in all fields correctly!')
                  return
                }
                dispatch(
                  editContact({
                    id,
                    fullName,
                    mail,
                    cellNumber
                  })
                )
                setIsEditing(false)
              }}
            >
              Save
            </SaveButton>
            <S.RemoveButton onClick={cancelEditing}>Exit</S.RemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.RemoveButton onClick={() => dispatch(removeContact(id))}>
              Delete
            </S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default ContactComponent
