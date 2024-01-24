import { useApp } from "../../hooks/useApp"

export default function ListForn(){ 
  //usndo aqui a variavel que foi setada com todos os dados a partir do gatihlo do click do botão em outro componente isolado deste
  const {forn} = useApp()
  console.log(forn)
  
  return (
    <div>
      <ul>
        {
          forn.length > 0 ?
          forn.map((forn) => {
            return (
              <li key={forn.title}>{forn.title}</li>
            )
          })
          :
          (<li> teste </li>)
        }
      </ul>
    </div>
  )
}