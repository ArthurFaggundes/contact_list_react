import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { MainContainer } from '../../styles/index'
import Contact from '../../components/ContactComponent'

const ContactListContainer = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  const { searchTerm } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filteredContacts = itens

    if (searchTerm !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item: { fullName: string }) =>
          item.fullName.toLowerCase().search(searchTerm.toLowerCase()) >= 0
      )
      return filteredContacts
    } else {
      return itens
    }
  }
  const contacts = filterContacts()

  return (
    <MainContainer>
      <ul>
        {contacts.map((c) => (
          <li key={c.fullName}>
            <Contact
              id={c.id}
              fullName={c.fullName}
              mail={c.mail}
              cellNumber={c.cellNumber}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactListContainer
