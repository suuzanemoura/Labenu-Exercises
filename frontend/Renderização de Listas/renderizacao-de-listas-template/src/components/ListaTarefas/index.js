import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaTarefas } from "./ListaTarefas";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const [list, setList] = useState([
    "Aula na Conway",
    "Estudar React",
    "Fazer almoço",
  ]);

  const adicionaTarefa = () => {
    const newList = [...list, novaTarefa];
    setList(newList);
    setNovaTarefa("");
  };

  const removeTarefa = (item) => {
    const filteredList = list.filter((elemento) => elemento !== item);
    setList(filteredList);
  };

  const renderOnScreen = () => {
    return list.map((item, indice) => {
      return (
        <Tarefa key={indice}>
          <p>{item}</p>
          <RemoveButton onClick={() => removeTarefa(item)}>
            <img src={bin} alt="" width="16px" />
          </RemoveButton>
        </Tarefa>
      );
    });
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{renderOnScreen()}</ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
