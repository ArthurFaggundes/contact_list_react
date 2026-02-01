import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { Title, MainContainer } from '../../styles/index'
import Task from '../../components/Task'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks) // Usa o hook useSelector para acessar o estado global da store Redux e obter a lista de tarefas
  const { searchTerm, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = itens

    if (searchTerm !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.Title.toLowerCase().search(searchTerm.toLowerCase()) >= 0 // Filtra as tarefas cujo título contém o termo de busca (case insensitive)
      )
      // if (criteria === 'Priority') {
      //   filteredTasks = filteredTasks.filter(
      //     // Filtra as tarefas pelo valor de prioridade selecionado
      //     (taskBy) => taskBy.Priority === value
      //   )
      // } else if (criteria === 'Status') {
      //   filteredTasks = filteredTasks.filter(
      //     // Filtra as tarefas pelo valor de status selecionado
      //     (taskBy) => taskBy.Status === value
      //   )
      // }
      return filteredTasks
    } else {
      return itens
    }
  }
  const tasks = filterTasks()

  const showSearchTerm = (quantity: number) => {
    let mensage = ''
    const complement =
      searchTerm !== undefined && searchTerm.length > 0
        ? `and "${searchTerm}"`
        : ''

    if (criteria === 'All') {
      mensage = `${quantity} task(s) found as: All ${complement}`
    } else {
      mensage = `${quantity} task(s) found as: ${value} ${complement}`
    }

    return mensage
  }
  const filterMensage = showSearchTerm(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{filterMensage}</Title>
      <ul>
        <li></li>
      </ul>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <Task // precisa do nome completo, email e telefone
              fullName={t.fullName}
              mail={t.mail}
              cellNumber={t.cellNumber}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default TaskList
