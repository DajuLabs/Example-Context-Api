import { Routes, Route } from 'react-router-dom'
import { Defaultlayout } from '../layouts/DefaultLayout'
import { Home } from '../screens/Home'
import { About } from '../screens/About'

export function Router() {
  return (
    <Routes>
      {/*  O primeiro path / que tem o default layout é apenas uma configuração do pacote router-dom que dá um padrão de estilo superio as rotas abaixo dela  */}
      <Route path="/" element={<Defaultlayout />}>
        { /* Daqui para baixo, todas as rotas são normais, carregam suas telas apenas o primeiro defualtlayout que é diferente, é um container que encobre e dá padrão as rotas abaixo  */ }
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<About />}
        />
      </Route>
    </Routes>
  )
}
