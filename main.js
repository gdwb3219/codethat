const { BrowserRouter } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <HomePage />
      </App>
    </BrowserRouter>
  )
}

export default Main;