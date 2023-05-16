import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductsList/ProductCard";

const productMock = {
  id: "1",
  title: "Bolsa",
  price: 99.9,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

const addToCartMock = jest.fn();

describe("Teste do Product Card", () => {
  test("renderizar o componente", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);
  });

  test("deve renderizar a imagem, o título, o preço e o botão de comprar", () => {
    render(<ProductCard product={productMock} addToCart={addToCartMock} />);

    const image = screen.getByRole("img", { name: /bolsa/i });
    const title = screen.getByRole("heading", { name: /bolsa/i });
    const price = screen.getByText(/\$99\.90/i, { name: /bolsa/i });
    const buttonBuy = screen.getByRole("button", { name: /buy/i });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(buttonBuy).toBeInTheDocument();
  });

  test("3 - quando o botão de comprar for clicado, deve adicionar o produto no carrinho", async () => {
    const user = userEvent.setup();

    render(<ProductCard product={productMock} addToCart={addToCartMock} />);
    const buttonBuy = screen.getByRole("button", { name: /buy/i });
    await user.click(buttonBuy);

    expect(addToCartMock).toBeCalled();
    expect(addToCartMock).toHaveBeenCalled();

    expect(addToCartMock).toBeCalledTimes(1);

    expect(addToCartMock).toBeCalledWith(productMock);
  });
});
