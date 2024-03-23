import React from "react";
import { ButtonContainer, DoneButton, CardWrapper, OpenButton, RemoveButton, TodoMessage, ViewButton } from "./style";

const Card = (props) => {

  const {handleRemove, handleMarkAsDoneOrOpen, handleView} = props

  return (
    <CardWrapper isComplete={props?.data?.completed}>
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
          onClick={(e) => handleMarkAsDoneOrOpen(e,true)}
        >
          Mark as done
        </DoneButton>
        <OpenButton 
          id={`${props?.data?.id}`}
          disabled={!props?.data?.completed}
          onClick={(e) => handleMarkAsDoneOrOpen(e,false)}
        >
          Mark as open
        </OpenButton>
        <ViewButton 
          id={`${props?.data?.id}`}
          onClick={(e) => handleView(e,`/${e.target.id}`)}
          disabled={props?.data?.isDummy}
          isDummy={props?.data?.isDummy}
        >
          View{props?.data?.isDummy ? '(Dummy Data)' : ''}
        </ViewButton>
      </ButtonContainer>
    </CardWrapper>
  );
};

export default Card;
