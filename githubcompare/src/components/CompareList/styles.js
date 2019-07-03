import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin: 5px 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  .repo_buttons {
    &--container {
      position: relative;
      padding: 5px auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    &--action {
      border-radius: 3px;
      background-color: transparent;
      border: 1px solid #eee;
      padding: 6px;
      margin: 5px 5px 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: #777;
      cursor: pointer;
      &:hover {
        background-color: #777;
        border: 1px solid #777;
        color: #000;
      }
    }
  }
`;
