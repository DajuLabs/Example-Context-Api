import { useApp } from "../../hooks/useApp"

export default function Search(){
  const {name, setName, fetchForn } = useApp()

  async function handleClick(){
    const id = 2
    //acionei a função que foi feita lá no provider para poder preeencher a informação que preciso usar no componente listforn mas sem ter passagem de propriedades entre compontentes
    fetchForn(id)
  }

  return (
    <div>
        <p className="mt-10">Home</p> 
        <br/>
        <input
          className="h-10 border border-emerald-500 w-[600px] text-center" 
          type="text" name="name" placeholder="Digite seu nome aqui para aparecer em outra rota sem passar por propriedade"
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
        <button onClick={handleClick}>
          Clique
        </button>
    </div>
  )
}