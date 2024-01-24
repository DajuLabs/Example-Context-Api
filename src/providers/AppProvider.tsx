import { ReactNode, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { api } from "../api"

//tipagem dos elementos que vão passar a ser filhos deste provedor, pois ele vai emcobrir a aplicação para poder fornecer o contexto as telas
type AppContextProviderProps = {
  children: ReactNode
}

export type PropsForn = {
  title: string
}

//função que provê o contexto
export function AppProvider({children}: AppContextProviderProps){
  const [name, setName] = useState<string>('')
  const [forn, setForn] = useState<PropsForn[]>([])
  //const [data, setData] = useState<GitHubRepos[]>([])


  //função que salva os dados numa variavel
  async function fetchForn(id: number){
    const response = await api.get(`todos/${id}`)

    setForn([response.data])
  }

  //objeto de valores que podemos passar para o contexto poder prover. só posso passar o que está tipado no contexto AppContext
  const value = {name, setName, fetchForn, forn}

  return (
    <>
      {/* componente que prove um conjunto de valores que vc deseja passar como contexto  */}
      <AppContext.Provider value={value}>
        {
          children
        }
      </AppContext.Provider>
    </>
  )
}