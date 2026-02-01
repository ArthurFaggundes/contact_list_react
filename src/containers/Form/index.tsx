import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, SaveButton, Title } from '../../styles/index'
import { SearchInput } from '../../styles/index'
import { FormContainer, OptionsContainer, Option } from './styles'
import { addNewTask } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const addTask = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      addNewTask({
        Title: title,
        Description: description,
        Priority: priority,
        Status: enums.Status.PENDING
      })
    )
    navigate('/')
  }

  return (
    <>
      <MainContainer>
        <Title>New task</Title>
        <FormContainer onSubmit={addTask}>
          <SearchInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            type="text"
          />
          <SearchInput
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            placeholder="Task description"
            as="textarea"
          />
          <OptionsContainer>
            <p>Priority:</p>
            {Object.values(enums.Priority).map(
              (
                Priority // acessa os valores dos objetos e cria um código para cada objeto com os respectivos valores
              ) => (
                <Option key={Priority}>
                  <input
                    value={Priority}
                    name="priority"
                    type="radio"
                    id={Priority}
                    onChange={(e) =>
                      setPriority(e.target.value as enums.Priority)
                    }
                    defaultChecked={priority === enums.Priority.URGENT}
                  />{' '}
                  <label htmlFor={Priority}>{Priority}</label>
                </Option>
              )
            )}
          </OptionsContainer>
          <SaveButton type="submit">Save</SaveButton>
        </FormContainer>
      </MainContainer>
    </>
  )
}
export default Form
