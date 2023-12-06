import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './styles/tailwindImports.css'
import { AppProvider } from './providers/AppProvider'

function App() {

  return (
    <div>
      {/* Este é uma espécia de provider do próprio react-router-dom para encobrir e servir nossas rotas  */}
      <BrowserRouter>
        <AppProvider>
            {/* Nosso componente de rota que criamos na pasta Router/index.tsx  */}
            <Router />
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
