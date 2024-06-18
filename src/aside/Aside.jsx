import './Aside.css';
import React from 'react';


function Aside({onClick}) {

  const categories = [
    {
      key: "All",
      name: "Все"
    },
    {
      key: "Man",
      name: "Мужское"
    },
    {
      key: 'Woman',
      name: "Женское"
    },
    {
      key: 'Child',
      name: "Детское"
    },
  ]

  const CategoryChange = (el) => {
    onClick(el.target.innerHTML)
  }


    return(
        <div className="aside"> 
      <h2>Кроссовки</h2>
          {
            categories.map((el) => (
              <div key={el.key} 
              onClick={CategoryChange}>{el.name}</div>
            ))
          }
    </div>
    )
}

export default Aside;