import { ListaContainer, TasksAccomplished } from "./styled";

export function TaskAccomplishedList({ lista }) {
  return (
    <ListaContainer>
      <ul>
        {lista.map((tarefa, index) => {
          return (
            <TasksAccomplished key={index}>
              <p>{tarefa}</p>
            </TasksAccomplished>
          );
        })}
      </ul>
    </ListaContainer>
  );
}
