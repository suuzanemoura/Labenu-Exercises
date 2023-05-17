import axios from "axios";
import ProductCard from "../components/ProductCard";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("axios");

const axiosResponseMock = {
  data: {
    title: "Bananinha",
    description: "Olha a bananinha!",
    price: 50,
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
};

describe("Product Card", () => {
  beforeEach(() => {
    axios.mockReset();
  });

  test("renderiza a página", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);

    screen.debug();

    await waitFor(() => {});

    screen.debug();
  });

  test("renderiza a mensagem de carregamento", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);

    screen.debug();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("Bananinha")).not.toBeInTheDocument();

    await waitFor(() => {});

    screen.debug();
  });

  test("renderiza informações do produtox", async () => {
    axios.get.mockResolvedValueOnce(axiosResponseMock);

    render(<ProductCard />);

    screen.debug();

    await waitFor(() => {
      expect(screen.getByText("Bananinha")).toBeInTheDocument();
      expect(screen.getByText("Olha a bananinha!")).toBeInTheDocument();
      expect(screen.getByText("$50")).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: /thumbnail for bananinha/i })
      ).toBeInTheDocument();
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    screen.debug();
  });
});
