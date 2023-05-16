import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";
import userEvent from "@testing-library/user-event";

const activeModalMock = {
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  id: 1,
  name: "Bulbasaur",
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  weight: 69,
  height: 7,
};

const closeModalMock = jest.fn();

describe("Testes para o modal", () => {
  test("Deve renderizar os elementos do Modal", () => {
    render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />);

    // screen.logTestingPlaygroundURL();

    const image = screen.getByRole("img", { name: /bulbasaur/i });
    const name = screen.getByText(/bulbasaur/i);
    const pokeNumber = screen.getByText(/#1/i);
    const type1 = screen.getByText(/grass/i);
    const type2 = screen.getByText(/grass/i);
    const weight = screen.getByText(/6\.9 kg/i);
    const height = screen.getByText(/0\.7 m/i);
    const closeButton = screen.getByRole("button", { name: /❌/i });

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(pokeNumber).toBeInTheDocument();
    expect(type1).toBeInTheDocument();
    expect(type2).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  test("ao clicar no botão de fechar, é disparada a função que fecha o modal", async () => {
    const user = userEvent.setup();

    render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />);

    const closeButton = screen.getByRole("button", { name: /❌/i });
    await user.click(closeButton);

    expect(closeModalMock).toBeCalled();
    expect(closeModalMock).toHaveBeenCalled();
    expect(closeModalMock).toBeCalledTimes(1);
  });
});
