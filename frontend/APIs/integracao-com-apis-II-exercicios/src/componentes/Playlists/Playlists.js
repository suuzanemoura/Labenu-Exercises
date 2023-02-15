import axios from "axios";
import React, { useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import { Container } from "./styled";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState("");
  const [newPlaylist, setNewPlaylist] = useState("");

  const headers = {
    headers: {
      Authorization: "suzane-moura-conway",
    },
  };
  const getAllPlaylists = async () => {
    try {
    } catch (error) {}

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers
      )
      .then((response) => {
        setPlaylists(response.data.result.list);
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  useEffect(() => {
    getAllPlaylists();
  }, []);

  const searchPlaylist = async () => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${namePlaylist}`,
        headers
      );
      setPlaylists(response.data.result.playlist);
      setNamePlaylist("");
    } catch (error) {
      console.log(error.response);
    }
  };

  const addPlaylist = async () => {
    const newNamePlaylist = {
      name: newPlaylist,
    };

    try {
      await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        newNamePlaylist,
        headers
      );
      getAllPlaylists();
      setNewPlaylist("");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Container>
        <input
          placeholder="Procure sua playlist"
          value={namePlaylist}
          onChange={(event) => setNamePlaylist(event.target.value)}
        />
        <button onClick={searchPlaylist}>Buscar</button>
      </Container>
      <Container>
        <input
          placeholder="Crie sua playlist"
          value={newPlaylist}
          onChange={(event) => setNewPlaylist(event.target.value)}
        />
        <button onClick={addPlaylist}>Criar</button>
      </Container>
      {playlists.map((playlist) => {
        return (
          <Musicas
            key={playlist.id}
            playlist={playlist}
            headers={headers}
            getAllPlaylists={getAllPlaylists}
          />
        );
      })}
    </div>
  );
}

export default Playlists;
