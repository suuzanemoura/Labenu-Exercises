import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartCard from "../components/Cart/CartCard";

const productCartMock = {
  id: "1",
  title: "Bolsa",
  price: 99.9,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  quantity: 2,
};

const removeFromCartMock = jest.fn();

describe("Testes para o CartCard", () => {
  test("Deve renderizar a imagem, o título, o preço, a quantidade e o botão de remover", () => {
    render(
      <CartCard product={productCartMock} removeFromCart={removeFromCartMock} />
    );

    const image = screen.getByRole("img", { name: /bolsa/i });
    const title = screen.getByRole("heading", { name: /bolsa/i });
    const price = screen.getByText(/\$99\.90/i);
    const quantity = screen.getByText(/2/i);
    const buttonRemove = screen.getByRole("button", { name: /remove/i });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(buttonRemove).toBeInTheDocument();
  });

  test("Quando o botão remover for clicado, o item deve ser removido do carrinho", async () => {
    const user = userEvent.setup();

    render(
      <CartCard product={productCartMock} removeFromCart={removeFromCartMock} />
    );
    const buttonRemove = screen.getByRole("button", { name: /remove/i });
    await user.click(buttonRemove);

    expect(removeFromCartMock).toBeCalled();
    expect(removeFromCartMock).toHaveBeenCalled();

    expect(removeFromCartMock).toBeCalledTimes(1);

    expect(removeFromCartMock).toBeCalledWith(productCartMock);
  });
});
