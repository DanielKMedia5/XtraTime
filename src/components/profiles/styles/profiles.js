import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  font-family: 'coolvetica';
  width: 100%;
  color: #333333;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  font-family: 'coolvetica';
  letter-spacing: 1px;
  font-weight: bold;
  color: #333333;
  text-overflow: ellipsis;
  font-size: 16px;
  transition: all .2s ease-in-out;

`;

export const Picture = styled.img`
  border-radius: 100px;
  width: 100%;
  max-width: 150px;
  height: auto;
  cursor: pointer;
  transition: all .2s ease-in-out;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    transform: scale(1.1);
  }

  &:hover ${Name} {
    font-weight: bold;
    transform: scale(1.1);
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
