import { ReactNode, useState } from "react"
import { AppContext } from "../contexts/AppContext"

//tipagem dos elementos que vão passar a ser filhos deste provedor, pois ele vai emcobrir a aplicação para poder fornecer o contexto as telas
type AppContextProviderProps = {
  children: ReactNode
}

//função que provê o contexto
export function AppProvider({children}: AppContextProviderProps){
  const [name, setName] = useState<string>('')

  //objeto de valores que podemos passar para o contexto poder prover. só posso passar o que está tipado no contexto AppContext
  const value = {name, setName}

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