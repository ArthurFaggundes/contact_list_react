import SideBar from '../../containers/SideBar'
import TaskList from '../../containers/TaskList'
import ButtonNewTask from '../../components/ButtonNewTask'

export const Home = () => (
  <>
    <SideBar showFilters />
    <TaskList />
    <ButtonNewTask />
  </>
)
