import styled from "styled-components";

export const VideoCard = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-style: solid;
  border-width: thin;
  align-items: start;

h4 {
    margin: 0.5rem 0 0.5rem 1rem;
}

`

export const VideoCardImg = styled.img `
    width: 100%;
    height: 200px;
    object-fit: cover;
`