import React from 'react';
import { EmptyList } from "./style";
import Card from '../../components/todoCard';

function List(props) {

  const { todoData, setTodoData, backupTodoData, setBackupTodoData, handleView } = props

  const getUpdatedData = (id, value) => {
        const updatedDoneDataTD = todoData.map(
            (item) => {
                if (Number(item?.id) === Number(id)) {
                    item.completed = value
                }
                return item
            }
        )
        const updatedDoneDataBTD = backupTodoData.map(
            (item) => {
                if (Number(item?.id) === Number(id)) {
                    item.completed = value
                }
                return item
            }
        )
        return {updatedDoneDataTD, updatedDoneDataBTD}
    }

    const handleRemove = (e) => {
        const payload = e.target.id
        setTodoData((prev) => prev.filter(
            (item) => Number(item?.id) !== Number(payload)
        ))
        setBackupTodoData((prev) => prev.filter(
            (item) => Number(item?.id) !== Number(payload)
        ))
        e.preventDefault()
    };

    const handleMarkAsDoneOrOpen = (e, value) => {
        const {updatedDoneDataTD, updatedDoneDataBTD} = getUpdatedData(e.target.id, value)
        setTodoData(updatedDoneDataTD)
        setBackupTodoData(updatedDoneDataBTD)
        e.preventDefault()
    }

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
  