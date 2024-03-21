import React from "react";
import { ButtonContainer, DoneButton, CardWrapper, OpenButton, RemoveButton, TodoMessage, ViewButton } from "./style";

const Card = (props) => {

  const handleRemove = (e) => {
  };

  const handleMarkAsDone = (e) => {
  }

  const handleMarkAsOpen = (e) => {
  }

  const handleView = (e) => {
  }

  return (
    <CardWrapper isComplete={props?.data?.completed}>
      {console.log(props?.data?.title)}
      <TodoMessage>
        {props?.data?.title}
      </TodoMessage>
      <ButtonContainer>
        <RemoveButton
          id={`${props?.data?.id}`}
          onClick={handleRemove}
        >
          Remove
        </RemoveButton>
        <DoneButton 
          id={`${props?.data?.id}`}
          disabled={props?.data?.completed}
          onClick={handleMarkAsDone}
        >
          Mark as done
        </DoneButton>
        <OpenButton 
          id={`${props?.data?.id}`}
          disabled={!props?.data?.completed}
          onClick={handleMarkAsOpen}
        >
          Mark as open
        </OpenButton>
        <ViewButton 
          id={`${props?.data?.id}`}
          onClick={handleView}
          disabled={props?.data?.isDummy}
        >
          View{props?.data?.isDummy ? '(Dummy Data)' : ''}
        </ViewButton>
      </ButtonContainer>
    </CardWrapper>
  );
};

export default Card;
