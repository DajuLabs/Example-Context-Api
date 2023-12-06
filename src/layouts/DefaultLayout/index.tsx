import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function Defaultlayout() {
  return (
    <div>
      <Header/>
      {/* Este componente é próprio do pacote react router dom, é tipo uma props children passada como parâmetro  */}
      <Outlet />
    </div>
  )
}
