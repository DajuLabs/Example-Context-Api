import { useApp } from "../hooks/useApp"

export function Header(){
  const {name} = useApp()

  return (
    <div className="bg-emerald-500 w-full text-white">
      <div className="flex flex-row justify-between p-4">
        <p>Cabeçalho da aplicação</p>
        { name ? name : 'Seu nome aparecerá aqui quando for digitado' }
      </div>
    </div>
  )
}