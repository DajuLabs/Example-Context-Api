import { createContext } from "react"

//Tipo de dados que o contexto espera receber
export type AppContext = {
  name: string
  setName: (name: string) => void,
}

//aqui estamos exportando um contexto recém criado chamado appContext, pode ser qualquer nome que faça sentido pro contexto
//podemos ter vários contextos separados em arquivos diferente, tudo depende do uso. Se precisamos de um contexto apenans para o módulo de compras por exemplo
//não faz sentido emcobrir toda a aplicação neste contexto, você só precisa envolver as telas e componentes pertinentes ao módulo de compras.
//alguns contextos podem envolver toda a aplicação como alguns outros só módulos específicos

export const AppContext = createContext({} as AppContext) //Objeto vazio que tem a tipagem do que a gente vai receber