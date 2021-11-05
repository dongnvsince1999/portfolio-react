import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;
// padding: 5px;


export const CardLeft = styled.div`
  border-radius: 5px;
 background: #fff;
  justify-self: center;
padding:5px;
box-shadow: 0px 0px 10px 3px #c4c4c4;
  img {
    border-radius: 3px;
    height: auto;
  };
  :hover{
box-shadow: 0px 0px 10px 3px #A4CDDA;

  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    color: #0068ff;
  font-weight: 600;
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  margin-bottom: 5px;
  .stackTitle {
    min-width: fit-content;
    margin-right: 10px;
    font-weight: 500;
font-weight: 600;
    font-size: 16px;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
