import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  width: 20%;
  color: white;
  height: 100px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  overflow-y: scroll;
  gap: 5px;
  background-color: ${(props) => props?.isComplete ? 'green' : '#4b9cd3'} !important;
`
export const TodoMessage = styled.div`
  color: white;
  width: 95%;
`

export const ButtonContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;

  button{
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    width: 100%;
  }
`

export const RemoveButton = styled.button`
  background-color: lightsalmon;
`

export const DoneButton = styled.button`
  background-color: lightgreen;
`

export const OpenButton = styled.button`
  background-color: lightgoldenrodyellow;
`

export const ViewButton = styled.button`
  background-color: white;
  cursor: ${(props) => props?.isDummy ? 'not-allowed' : 'pointer'} !important;
`