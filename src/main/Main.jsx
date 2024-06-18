import './Main.css';

function Main(props) {

  
    console.log(props.tes)

    const testItem = props.tes.map((test) => 
    
    <div className="card">
      <img src="https://cdn.4stand.com/huge/25/8e/258e26f4ff4b54823e93695892cbe0cc39cce371.jpg" />
      <p className='title'>{test.title}</p>
      <p id="last_price">{test.last_price}</p><p className="price">{test.price}</p>
      <button onClick={() => props.onAdd(test)}>Добавить в корзину</button>
    </div>

  )

    return(
      <div className="main" id='main'>
        {testItem}
        </div>
        
    )
}

export default Main