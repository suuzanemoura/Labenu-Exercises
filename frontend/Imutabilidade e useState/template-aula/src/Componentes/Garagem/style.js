import styled from "styled-components";

export const Header = styled.header `
    background-color:#FA993C;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: white;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Button = styled.button `
    border: none;
    background-color: orange;
    padding: 0.625rem;
    font-weight: 700;
    width: 10rem;
    height: 2rem;

    :hover {
        background-color: darkorange;
    }
`

export const GarageContainer = styled.main `
    background-color: lightgray;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const ParkingLot = styled.section `
    background-color: #7A717D;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3rem;
    padding: 3rem;
    margin-bottom: 1.5rem;
;
`

export const Footer = styled.footer `
    background-color:#FA993C;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: white;
    font-family: sans-serif;
`