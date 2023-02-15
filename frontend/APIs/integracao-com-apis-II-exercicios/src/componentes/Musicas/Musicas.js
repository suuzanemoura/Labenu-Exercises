import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Botao,
  ContainerInputs,
  ContainerMusicas,
  InputMusica,
  Musica,
  PlaylistBox,
} from "./styled";

// const musicasLocal = [
//   {
//     artist: "Artista 1",
//     id: "1",
//     name: "Musica1",
//     url: "http://spoti4.future4.com.br/1.mp3",
//   },
//   {
//     artist: "Artista 2",
//     id: "2",
//     name: "Musica2",
//     url: "http://spoti4.future4.com.br/2.mp3",
//   },
//   {
//     artist: "Artista 3",
//     id: "3",
//     name: "Musica3",
//     url: "http://spoti4.future4.com.br/3.mp3",
//   },
// ];

export default function Musicas(props) {
  const [musicas, setMusicas] = useState([]);
  const [artist, setArtist] = useState("");
  const [music, setMusic] = useState("");
  const [urlTrack, setUrlTrack] = useState("");

  const handleArtistInput = (event) => setArtist(event.target.value);
  const handleMusicInput = (event) => setMusic(event.target.value);
  const handleUrlTrackInput = (event) => setUrlTrack(event.target.value);

  const getAllPlaylistTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`,
        props.headers
      )
      .then((response) => {
        setMusicas(response.data.result.tracks);
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  useEffect(() => {
    getAllPlaylistTracks();
  }, []);

  const addTrackToPlaylist = (id) => {
    const newMusic = {
      name: music,
      artist: artist,
      url: urlTrack,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        newMusic,
        props.headers
      )
      .then(() => {
        getAllPlaylistTracks();
        setMusic("");
        setArtist("");
        setUrlTrack("");
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const removePlaylistTrack = (playlistId, musicId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${musicId}`,
        props.headers
      )
      .then(() => {
        getAllPlaylistTracks();
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const removePlaylist = async (playlistId) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        props.headers
      );
      props.getAllPlaylists();
    } catch (error) {
      alert(error.response);
    }
  };

  return (
    <ContainerMusicas>
      <PlaylistBox>
        <h2>{props.playlist.name}</h2>
        <button onClick={() => removePlaylist(props.playlist.id)}>X</button>
      </PlaylistBox>
      {musicas.map((musica) => {
        return (
          <Musica key={musica.id}>
            <h3>
              {musica.name} - {musica.artist}
            </h3>
            <audio src={musica.url} controls />
            <button
              onClick={() => removePlaylistTrack(props.playlist.id, musica.id)}
            >
              X
            </button>
          </Musica>
        );
      })}
      <ContainerInputs>
        <InputMusica
          placeholder="artista"
          value={artist}
          onChange={handleArtistInput}
        />
        <InputMusica
          placeholder="musica"
          value={music}
          onChange={handleMusicInput}
        />
        <InputMusica
          placeholder="url"
          value={urlTrack}
          onChange={handleUrlTrackInput}
        />
        <Botao
          onClick={() => {
            addTrackToPlaylist(props.playlist.id);
          }}
        >
          Adicionar musica
        </Botao>
      </ContainerInputs>
    </ContainerMusicas>
  );
}
