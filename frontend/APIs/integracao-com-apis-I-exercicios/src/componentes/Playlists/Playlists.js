import axios from "axios";
import React, { useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  const headers = {
    headers: {
      Authorization: "suzane-moura-conway",
    },
  };
  const getAllPlaylists = () => {
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

  return (
    <div>
      {playlists.map((playlist) => {
        return (
          <Musicas key={playlist.id} playlist={playlist} headers={headers} />
        );
      })}
    </div>
  );
}

export default Playlists;
