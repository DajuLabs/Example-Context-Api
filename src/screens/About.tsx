import { useApp } from "../hooks/useApp"

export function About(){
  //importanmos aqui o hook para que possamos ter disponível os estados e variáveis que queremos usar para dar valor a elas e exibir em algum lugar
  const {name} = useApp()

  
  return (
    <div className="mt-20 border boeder-emerald-400 m-4 p-10">
        <h1>Componente About</h1>
        <p>Seu nome também vai aparecer aqui no componente about nesta outra página <span className="text-[30px] font-bold text-emerald-400">{name}</span></p>
    </div>
  )
}