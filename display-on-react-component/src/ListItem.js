import { useState, useEffect } from 'react';

function ListItem(){

  const [listItems, setListItems] = useState();

  useEffect(() => getRowsFromDatabaseAsList())
  
  const getRowsFromDatabaseAsList = async () => {
    const res = await fetch('http://localhost/exercises/select.php')
    const data = await res.json();
    setListItems(data.map(row => <li key={row.codigo}>|{row.codigo}|{row.nome}|{row.estado}</li>));
  };
  
  return(
    <>
      {listItems}
    </>
  )

}

export default ListItem;