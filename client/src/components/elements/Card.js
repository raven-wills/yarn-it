import styled from "styled-components";
const Card = styled.div`
  background: var(--purple);
  text-align: center;
  width: 300px;
  min-height: 300px;
  border-radius: 5px;
  padding: 2em;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  color: rgb(85, 8, 86);
  margin: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0;
    font-size: 30px;
    height: 52px;
  }

  img {
    margin: 2em;
    width: 300px;
    height: 220px;
    border-radius: 3px;
    object-fit: cover;
    border-top: 4px solid rgb(85, 8, 86);
    border-bottom: 4px solid rgb(85, 8, 86);
  }

  button {
    width: 150px;
    background-color: var(--orange);
    color: white;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(144, 106, 137, 0.12),
      0 1px 2px rgba(144, 106, 137, 0.24);
    &:hover {
      width: 155px;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 10px 15px rgba(144, 106, 137, 0.18),
        0 16px 24px rgba(144, 106, 137, 0.22);
    }
  }
`;

export default Card;
