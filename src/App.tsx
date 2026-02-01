import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container } from './styles'
import store from './store'
import { Home } from './pages/Home'
import { NewContact } from './pages/NewContact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/NewContact',
    element: <NewContact />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App

// npm i --save styled-components
// npm i --save @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npx eslint --fix .
// npm start

//! https://lms.ebaconline.com.br/lesson/7d305941-2bcf-41e0-853e-82af81e9d22c aula importante!
