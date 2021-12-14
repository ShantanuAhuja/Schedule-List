import React, { useState } from 'react'
import ToDoLists from './ToDoLists';

const App = () => {

  const [inputList, setInputList] = useState("");

  //To store list of items we declare it by empty array
  const [Items, setItems] = useState([]);

  // newEvent - A function retrive input form value takes event as an object and it retrives the forms's input value
  const newEvent = (event) => {
    setInputList(event.target.value);
  };
  // Delete Function for deleting list items
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      }
      );
    }
    );
  };

  // listOfItems is a function that calls when button is clicked
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    }

    );
    setInputList("");
  };





  return (
    <>
      <div className="maind">
        <div className="center_div">
          <br />
          <h1>TO DO LIST</h1>

          <br />
          <input type="text" placeholder=" Add a Items" value={inputList} onChange={newEvent} />

          <button onClick={listOfItems}>+</button>

          <ol>
            {Items.map((itemValue, index) => {
              return <ToDoLists key={index}
                id={index}
                text={itemValue}
                onSelect={deleteItem} />
            }

            )}
          </ol>



        </div>
      </div>
    </>
  );
};

export default App;
