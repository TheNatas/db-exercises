import { useState, useEffect } from 'react';

function ListItem(){

  // const [listItems, setListItems] = useState();

  // useEffect(getRowsFromDatabaseAsList(), listItems)
  
  const getRowsFromDatabaseAsList = async () => {
    const res = await fetch('http://localhost/exercises/select.php')
    const data = await res.json();
    console.log(...data.map(row => <li>|{row.codigo}|{row.nome}|{row.estado}</li>));
  };

  useEffect(() => getRowsFromDatabaseAsList())

  // const joinData = async () => {
  //   const rows = await getRowsFromDatabaseAsList();
  //   return [...rows];
  // };
  
  return(
    <>
      <p>alo</p>
    </>
  )

}

export default ListItem;