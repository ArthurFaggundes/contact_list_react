import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// ============================================================= types:

type FilterState = {
  searchTerm?: string
}

// ============================================================= initial state, slices:

const initialState: FilterState = {
  searchTerm: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      // Atualiza o termo de busca no estado do filtro
      state.searchTerm = action.payload // Define o termo de busca com o valor fornecido no payload da ação
    }
  }
})

// ============================================================= exports:

export const { setSearchTerm } = filterSlice.actions
export default filterSlice.reducer
