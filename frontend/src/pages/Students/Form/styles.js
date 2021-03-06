import styled from 'styled-components';

export const FormDiv = styled.div`
  width: 100%;

  form {
    padding: 30px;
    background: #fff;
    display: flex;
    flex-direction: column;

    input {     
      margin: 10px 10px;
      height: 45px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px 10px;
    }

    label {
      padding-left: 10px;
      color: #444;
      font-family: Roboto;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;
