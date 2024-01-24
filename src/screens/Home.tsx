import ListForn from "./components/ListForn"
import Search from "./components/Search"

export function Home(){
  //importanmos aqui o hook para que possamos ter disponível os estados e variáveis que queremos usar para dar valor a elas e exibir em algum lugar

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row">
        <Search/>
        <ListForn/>
      </div>
    </div>
  )
}