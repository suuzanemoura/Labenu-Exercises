import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";

describe("Testes do To Do List", () => {
  test("Deve renderizar o título", () => {
    render(<TodoList />);

    const title = screen.getByText("Todo List");

    expect(title).toBeInTheDocument();
  });

  test("o input deve iniciar vazio", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/enter a todo/i);

    expect(input).toHaveValue("");
  });

  test("1.2 - deve atualizar o valor do input sempre que digitar nele", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    const input = screen.getByPlaceholderText(/enter a todo/i);

    await user.type(input, "Estudar");

    expect(input).toHaveValue("Estudar");
  });

  test("2.2 - deve atualizar o valor do input sempre que digita.r nele", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    const input = screen.getByPlaceholderText(/enter a todo/i);

    await user.type(input, "Estudar{enter}");

    const todoItem = screen.getByText(/estudar/i);

    //screen.logTestingPlaygroundURL();

    expect(todoItem).toBeInTheDocument();
    expect(input).toHaveValue("");
  });
});

test("3 - deve alterar o status da tarefa quando o botão de alterar status for clicado", async () => {
  const user = userEvent.setup();

  render(<TodoList />);

  const input = screen.getByPlaceholderText(/enter a todo/i);

  await user.type(input, "Comer{enter}");

  const todoItem = screen.getByText(/comer/i);

  const toggleButton = screen.getByRole("button", { name: /toggle/i });

  await user.click(toggleButton);

  expect(todoItem).toBeInTheDocument();
  expect(input).toHaveValue("");
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  await user.click(toggleButton);

  expect(todoItem).toHaveStyle("text-decoration: none");
});
