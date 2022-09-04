

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
    color: #2f2c79;
  }
`;

export const LandingCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem 0;
    color: #2f2c79;
  }

  p {
    font-size: 1rem;
    padding: 0.5rem 0;
    text-align: justify;
    text-justify: inter-word;
  }
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
    text-align: justify;
    text-justify: inter-word;
    margin: 1rem auto;
  }
`;

export const PolaroidContainer = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
`;

export const Button = styled.button`
  width: 50%;
  padding: 3px 2px;
  margin: 1rem auto;
  justify-conent: center;
  align-items: center;
  background-color: #2f2c79;
  border: 1px solid #2f2c79;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
`;

export const Input = styled.input`
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  color: black;
`;
