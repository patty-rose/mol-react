import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import lightning from '../img/lightning.png';

const Container = styled.section`
backgroundImage: url(${lightning};
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: 100vh; 
  width: 100vw;
  background-position: center; 
`;

const MolTitle = styled.h1`
color: red;
`;

const MolText = styled.p`
color: red;
`

function MolTitlePage() {
  return (
    <Container>
        <MolTitle>
          Messengers of Lahar
          </MolTitle>
        <MolText>
          Live your desires and reverse the shame thrust on you by those fearful of exploration
        </MolText>
        <Link to="/Mol1">Enter</Link>
    </Container>
  );
}

export default MolTitlePage;