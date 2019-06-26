import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }
  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    border: 0;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    font-size: 20px;
    border-radius: 3px;
    &:hover {
      background: #52d89f;
    }
  }
`;
