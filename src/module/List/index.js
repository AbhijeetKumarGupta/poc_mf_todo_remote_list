import React from 'react';
import { CardContainer, EmptyList, ListTitle } from "./style";
import Card from '../../components/todoCard';

function List(props) {
  const { todoData } = props

  return (
    <>
      {todoData?.length > 0 ?
        todoData.map((item) =>
          <Card key={item?.id} data={item} />
        ) :
        <EmptyList>
          "No todo's found!"
        </EmptyList>
      }
    </>
  );
  }
  
  export default List;
  