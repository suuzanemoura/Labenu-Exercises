import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";
import { TaskAccomplishedList } from "./TaskAccomplishedList";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [taskAccomplishedList, setTaskAccomplishedList] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const addTaskByEnter = (event) => {
    if (event.key === "Enter") {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    const newTaskAccomplished = lista.filter((item) => item === tarefa);
    const newList = [...taskAccomplishedList, newTaskAccomplished];
    setTaskAccomplishedList(newList);
  };

  const addTasksAccomplished = (tarefa) => {
    const newTaskAccomplished = lista.filter((item) => item === tarefa);
    const newList = [...taskAccomplishedList, newTaskAccomplished];
    setTaskAccomplishedList(newList);
  };

  const removeTaskAndAddTaskAccomplished = (tarefa) => {
    removeTarefa(tarefa);
    addTasksAccomplished(tarefa);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyUp={addTaskByEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton
                  onClick={() => removeTaskAndAddTaskAccomplished(tarefa)}
                >
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <TaskAccomplishedList lista={taskAccomplishedList} />
    </ListaTarefasContainer>
  );
}
