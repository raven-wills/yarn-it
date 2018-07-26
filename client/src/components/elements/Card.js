import styled from "styled-components";
const Card = styled.div`
  background: white;
  text-align: center;
  width: 300px;
  min-height: 250px;
  border-radius: 5px;
  padding: 2em;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  color: #272727;
  margin: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18), 0 2px 2px rgba(0, 0, 0, 0.22);
  }

  h3 {
    margin: 0;
  }

  img {
    margin: 2em;
    width: 175px;
    height: 175px;
    border-radius: 3px;
    object-fit: cover;
  }
`;

export default Card;
