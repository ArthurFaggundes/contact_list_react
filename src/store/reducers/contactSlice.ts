import { createSlice, PayloadAction } from '@reduxjs/toolkit' // PayloadAction é um tipo genérico fornecido pelo Redux Toolkit que representa a ação com um payload tipado //* payload é a carga útil da ação, ou seja, os dados que estão sendo enviados com a ação
import ContactModel from '../../models/ContactModel' // Importa o modelo Task para tipar o estado inicial e as ações relacionadas às tarefas

type ContactState = {
  itens: ContactModel[] // Define que o estado das tarefas é um array de objetos do tipo Task
}

const initialState: ContactState = {
  itens: [
    {
      fullName: 'João Macedo',
      mail: 'joao.macedo@gmail.com',
      cellNumber: '(11) 98765-4321',
      id: 1
    },
    {
      fullName: 'Nicole Silva',
      mail: 'nicole.silva@gmail.com',
      cellNumber: '(21) 91234-1234',
      id: 2
    },
    {
      fullName: 'Maria Andrade',
      mail: 'maria.ajm@gmail.com',
      cellNumber: '(51) 92837-0192',
      id: 3
    },
    {
      fullName: 'Arthur Fagundes',
      mail: 'arthurhfagundes6@gmail.com',
      cellNumber: '(84) 90202-0202',
      id: 4
    }
  ]
}

// Cria um slice para gerenciar o estado das tarefas

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    //================================================================= função para remover contato

    removeContact: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
      return state
    },

    //================================================================= função para editar contato

    editContact: (state, action: PayloadAction<ContactModel>) => {
      const findContactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (findContactIndex >= 0) {
        state.itens[findContactIndex] = action.payload
      }
    },

    //================================================================= função para adicionar novo contato

    addNewContact: (state, action: PayloadAction<Omit<ContactModel, 'id'>>) => {
      const contactExists = state.itens.find(
        (contact) =>
          contact.fullName.toLowerCase() ===
          action.payload.fullName.toLowerCase()
      )
      if (contactExists) {
        alert('A contact with this name already exists')
      } else {
        const lastContact = state.itens[state.itens.length - 1] // Obtém o último contato do array de contatos

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1 // Define o Id do novo contato como o Id do último contato + 1, ou 1 se não houver contatos
        }
        state.itens.push(newContact) // Adiciona o contato com o payload no array de contatos
      }
    }
  }
})

export const { removeContact, editContact, addNewContact } =
  contactSlice.actions

export default contactSlice.reducer
