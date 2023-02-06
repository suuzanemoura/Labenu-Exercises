import React, { useState, useEffect } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);
  const [contador, setContador] = useState(0);

  const armazenaNome = () => {
    localStorage.setItem("guardou", nome);
  };

  const recebeNome = () => {
    const nomeRecebido = localStorage.getItem("guardou");
    setNome(nomeRecebido);
  };

  const armazenaTarefas = () => {
    localStorage.setItem("tarefas", JSON.stringify(listaTarefa));
  };

  const recebeTarefas = () => {
    const tarefasRecebidas = localStorage.getItem("tarefas");
    const tarefas = JSON.parse(tarefasRecebidas);

    if (tarefas) {
      setListaTarefa(tarefas);
    }
  };

  const limparTarefas = () => {
    setTarefa("");
    setListaTarefa([]);
  };

  useEffect(() => {
    recebeNome();
    recebeTarefas();
    if (contador >= 0) {
      const contador = localStorage.getItem("contador");
      setContador(contador);
    }
  }, []);

  const addOne = () => {
    setContador(JSON.parse(contador) + 1);
  };

  const increaseOne = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    if (contador > 0) {
      localStorage.setItem("contador", contador);
    }
  }, [contador]);

  return (
    <Form>
      <h1>Aula de Local Storage</h1>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <div>
        <button onClick={armazenaNome}>Guardar Dados</button>
        <button onClick={recebeNome}>Acessar Dados</button>
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => setListaTarefa([...listaTarefa, tarefa])}
      >
        adicionar Tarefa
      </button>
      <ul>
        {listaTarefa.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={armazenaTarefas}>Guardar tarefa</button>
        <button onClick={recebeTarefas}>Acessar tarefa</button>
        <button
          onClick={() => {
            limparTarefas();
          }}
        >
          Limpar tarefas
        </button>
      </div>
      <div>
        <button onClick={increaseOne}>-</button>
        {contador}
        <button onClick={addOne}>+</button>
      </div>
    </Form>
  );
}
