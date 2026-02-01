import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { removeTask, editTask, changeStatus } from '../../store/reducers/tasks'
import { Button, SaveButton } from '../../styles'
import ContactModel from '../../models/ContactModel'

type Props = ContactModel

const Contact = ({
  fullName: originalFullName,
  mail: originalMail,
  cellNumber: originalCellNumber,
  id
}: Props) => {
  // declaração de estados e dispatch

  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const [fullName, setfullName] = useState('')
  const [mail, setMail] = useState('')
  const [cellNumber, setCellNumber] = useState('')

  // funções de manipulação de dados

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
    if (originalCellNumber > 0) {
      setCellNumber(originalCellNumber.toString()) //! depois verificar se é assim que converte number para string
    }
  }, [originalCellNumber])

  function cancelEditing() {
    setIsEditing(false)
    setfullName(originalFullName)
    setMail(originalMail)
    setCellNumber(originalCellNumber.toString())
  }

  function changeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        Id: id,
        Done: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={Status === enums.Status.DONE}
          onChange={changeTaskStatus}
        />{' '}
        {/* Status === enums.Status.DONE vai estar marcado quando estiver como Stutus = Done */}
        <S.Title>
          {isEditing && <em>Editing: </em>}
          {/* se for True mostra texto, basicamente*/}
          {title}
        </S.Title>
      </label>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={Status}>
        {Status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)} // para atualizar a descrição enquanto edita
        placeholder="Task description..."
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  editTask({
                    Title: title,
                    Status,
                    Priority: priority,
                    Description: description,
                    Id: id
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
            <S.RemoveButton onClick={() => dispatch(removeTask(id))}>
              Delete
            </S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contact
