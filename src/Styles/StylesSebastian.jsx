

import styled from 'styled-components';


export const MainContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const HelperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem auto;
`;

export const LandingImg = styled.img`
  width: 4%;
  
`;

export const LandingContainer = styled.div`
  display: flex;
  margin: 7rem auto;
  justify-content: center;
  align-items: center;
`;

export const LandingSections = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

export const LandingCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto;
`;

export const TestimoniesContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto;
`;

export const Polaroid = styled.div`
  width: 60%;
  background-color: #9f90ea;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  color: #ffffff;

  img {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export const PolaroidContainer = styled.div`
  text-align: center;
  padding: 10px 20px;
`;
