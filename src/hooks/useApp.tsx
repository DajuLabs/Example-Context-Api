import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function useApp(){
  //Usamos um hook aqui para poder pegar os dados que estão sendo disponibilizados no contexto
  const context = useContext(AppContext);
  //retornamos o contexto
  return context;
}