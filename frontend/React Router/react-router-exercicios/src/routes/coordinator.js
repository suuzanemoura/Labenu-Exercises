export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToProfilePage = (navigate) => {
  navigate("/profile");
};

export const goToProductPage = (navigate, id) => {
  navigate(`/product/${id}`);
};
