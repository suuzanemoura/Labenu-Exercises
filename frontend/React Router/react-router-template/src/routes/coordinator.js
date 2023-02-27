export const goToHomePage = (navigate) => {
  navigate(`/`);
};

export const goToProfilePage = (navigate, name) => {
  navigate(`/profile/${name}`);
};

export const goToLoginPage = (navigate) => {
  navigate(`/login`);
};
