import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { setSearchTerm } from '../../store/reducers/filter'
import { SearchCampInput } from './styles'

export const SearchField = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector(
    (state: RootReducer) => state.filter.searchTerm
  )

  return (
    <SearchCampInput
      type="text"
      placeholder="Search contacts names..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  )
}
