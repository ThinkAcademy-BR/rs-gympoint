import styled from 'styled-components';

export const sectionHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  height: 64px;
  padding: 0 20px;

  h2 {
    margin: 0 30px;
  }

  button #primary {
    color: #fff;
    background: #ee4d64;
  }

  button #secondary {
    color: #fff;
    background: #ccc;
  }
`;

export const FormDiv = styled.div`
  width: 100%;

  form {
    padding: 30px;
    background: #fff;
    display: flex;
    flex-direction: column;

    .async-select {
      height: 45px;
      width: 98%;
      margin: 10px 10px;
      > .react-select__control, .react-select__value-container, .react-select__indicators {
        height: 45px;
      }
    }

    .react-select {
      height: 45px;
      width: 200px;
      margin: 10px 10px;
    }

    .react-select__control {
      width: 100%;
    }

    .react-select__control, .react-select__value-container, .react-select__indicators {
      height: 45px;
    }
    

    label + input {
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

    div.input-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      
      div.input-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;
