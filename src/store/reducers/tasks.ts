import { createSlice, PayloadAction } from '@reduxjs/toolkit' // PayloadAction é um tipo genérico fornecido pelo Redux Toolkit que representa a ação com um payload tipado //* payload é a carga útil da ação, ou seja, os dados que estão sendo enviados com a ação
import Task from '../../models/ContactModel' // Importa o modelo Task para tipar o estado inicial e as ações relacionadas às tarefas

type TaskState = {
  itens: Task[] // Define que o estado das tarefas é um array de objetos do tipo Task
}

const initialState: TaskState = {
  itens: [
    {
      Title: 'Take out the trash',
      Description: '...',
      Priority: enums.Priority.IMPORTANT,
      Status: enums.Status.DONE,
      Id: 1
    },
    {
      Title: 'Clean the house',
      Description: 'Especialy the kitchen (dishes)',
      Priority: enums.Priority.URGENT,
      Status: enums.Status.DONE,
      Id: 2
    },
    {
      Title: 'Do the dishes',
      Description: '...',
      Priority: enums.Priority.IMPORTANT,
      Status: enums.Status.PENDING,
      Id: 3
    }
  ]
}

// Cria um slice para gerenciar o estado das tarefas

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState, // ou também só:   initialState
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      // faz com que o estado atual seja filtrado, removendo a tarefa cujo id corresponde ao valor fornecido no payload da ação
      state.itens = state.itens.filter((task) => task.Id !== action.payload)
      return state
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const findTaskIndex = state.itens.findIndex(
        (t) => t.Id === action.payload.Id
      ) // encontra o índice da tarefa que corresponde ao id fornecido no payload da ação

      if (findTaskIndex >= 0) {
        state.itens[findTaskIndex] = action.payload // atualiza a tarefa encontrada com os novos dados fornecidos no payload da ação
      }
    },
    addNewTask: (state, action: PayloadAction<Omit<Task, 'Id'>>) => {
      const taskExists = state.itens.find(
        (task) =>
          task.Title.toLowerCase() === action.payload.Title.toLowerCase()
      )
      if (taskExists) {
        alert('A task with this title already exists')
      } else {
        const lastTask = state.itens[state.itens.length - 1] // Obtém a última tarefa do array de tarefas

        const newTask = {
          ...action.payload,
          Id: lastTask ? lastTask.Id + 1 : 1 // Define o Id da nova tarefa como o Id da última tarefa + 1, ou 1 se não houver tarefas
        }
        state.itens.push(newTask) // Adiciona a tarefa com o payload no array de Tasks
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ Id: number; Done: boolean }>
    ) => {
      const findTaskIndex = state.itens.findIndex(
        (t) => t.Id === action.payload.Id
      )
      if (findTaskIndex >= 0) {
        state.itens[findTaskIndex].Status = action.payload.Done
          ? enums.Status.DONE
          : enums.Status.PENDING
      }
    }
  }
})

export const { removeTask, editTask, addNewTask, changeStatus } =
  tasksSlice.actions

export default tasksSlice.reducer
