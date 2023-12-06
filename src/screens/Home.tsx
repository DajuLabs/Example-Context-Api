import { useApp } from "../hooks/useApp"
import { About } from "./About"

export function Home(){
  //importanmos aqui o hook para que possamos ter disponível os estados e variáveis que queremos usar para dar valor a elas e exibir em algum lugar
  const {name, setName} = useApp()

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center mt-20 border boeder-emerald-400 m-4 p-10">
        <p className="mt-10">Home</p> 
        <br/>
        <input
          className="h-10 border border-emerald-500 w-[600px] text-center" 
          type="text" name="name" placeholder="Digite seu nome aqui para aparecer em outra rota sem passar por propriedade"
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
        <p>Obs: O component Header é totalmente separado e isolado do Header e eles não compartilham propriedade entre eles. Eles usam as funções e variáveis do contexto que criamos</p>
      </div> 
      <About/>
    </div>
  )
}