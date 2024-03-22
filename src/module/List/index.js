import React from 'react';
import { EmptyList } from "./style";
import Card from '../../components/todoCard';

function List(props) {

  const { todoData, handleRemove, handleMarkAsDoneOrOpen, handleView } = props

  return (
    <>
      {todoData?.length > 0 ?
        todoData.map((item) =>
          <Card 
            key={item?.id} 
            data={item} 
            handleRemove={handleRemove}
            handleMarkAsDoneOrOpen={handleMarkAsDoneOrOpen}
            handleView={handleView}
          />
        ) :
        <EmptyList>
          "No todo's found!"
        </EmptyList>
      }
    </>
  );
  }
  
  export default List;
  