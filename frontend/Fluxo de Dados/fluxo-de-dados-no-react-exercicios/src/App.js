import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { HeaderPage } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1)
  const [name, setName] = useState("")
  const [profilePhoto, setProfilePhoto] = useState("")
  const [title, setTitle] = useState("")
  const [urlPhoto, setUrlPhoto] = useState("")
  const [description, setDescription] = useState("")
  const [post, setPost] = useState (
    {
      title: "",
      image: "",
      description: ""
    }
    )
  
  const [userInfo, setUserInfo] = useState(
    {
      name: "",
      profilePhoto: ""
    }
  )

  const addUser = (objUser) => {
    setUserInfo(objUser)
  }

  const login = () => {
    addUser({
      name: name,
      profilePhoto: profilePhoto,
    })
      setPageFlow(2);
      setName("")
      setProfilePhoto("")
  };

  const logOut = () => {
    setPageFlow(1);
    setPost({
      title: "",
      image: "",
      description: ""
    })
  };

  const sendPhoto = () => {
    setPost({
      title: title,
      image: urlPhoto,
      description: description
    })
    setTitle("")
    setUrlPhoto("")
    setDescription("")
  };

  const handleInputName = (e) => {
    setName(e.target.value)
  }

  const handleInputProfilePhoto = (e) => {
    setProfilePhoto(e.target.value)
  }

  const handleInputTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleInputUrlPhoto = (e) => {
    setUrlPhoto(e.target.value)
  }

  const handleInputDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <HeaderPage
          userInfo={userInfo}
          pageFlow={pageFlow}
          setPageFlow={setPageFlow}
          />
          {pageFlow === 1 ? (
            <FormularioLogin
            setPageFlow={setPageFlow}
            name={name}
            handleInputName={handleInputName}
            profilePhoto={profilePhoto}
            handleInputProfilePhoto={handleInputProfilePhoto}
            login={login}
            />
          ) : (
            <FormularioPostagem
            title={title}
            handleInputTitle={handleInputTitle}
            urlPhoto={urlPhoto}
            handleInputUrlPhoto={handleInputUrlPhoto}
            description={description}
            handleInputDescription={handleInputDescription}
            sendPhoto={sendPhoto}
            logOut={logOut}
            />
          )}
        </aside>
        <TelaDaPostagem
        post={post}
        sendPhoto={sendPhoto}
        />
      </Container>
    </>
  );
}

export default App;
