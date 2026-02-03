import ContactListContainer from '../../containers/ContactListContainer'
import ButtonNewContact from '../../components/ButtonNewTask'
import NavigationBar from '../../containers/SearchFieldContainer'

export const Home = () => (
  <>
    <NavigationBar />
    <ContactListContainer />
    <ButtonNewContact />
  </>
)
