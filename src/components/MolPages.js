import React, { useParams } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import benchImg from '../img/bench.png';

function MolPages(props){
  // const { page } = props; 

  const { page } = useParams();

  // const handleProceed = (e) => {
  //   history.push(`/MolPages/${id}`);
  // };

  const Container = styled.section`
  backgroundImage: url(${benchImg};
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
`;

  return (
    <Container>
    <MolTitle>
    {page.backgroundImage}
      </MolTitle>
    <MolText>
      {page.pageText}
    </MolText>
    {/* <Link to="/Mol1">Enter</Link> */}
</Container>
  );
}

MolPages.propTypes = {
  page: PropTypes.object,
};

export default MolPages;