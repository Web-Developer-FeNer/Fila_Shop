import './Callback.css';

function Callback() {
    return(
        <div className="callback" id='callback'>
        <h3>Наши контакты</h3>
        <p>Остались вопросы или нужна помощь ? <br/> 
        Заполните форму ниже и наши менеджеры свяжутся с вами</p>
  
        <form>
          <div>
          <label className="first-label">ФИО  </label><br/>
          <input placeholder="Ваше ФИО" type="text"/>
          </div>
          <div>
          <label className="second-label">Телефон  </label><br/>
          <input placeholder="Ваш телефон" type="text"/>
          </div>
          <div>
          <label className="third-label">Ваш вопрос  </label><br/>
          <input className="form_text" placeholder="Сообщение" type="text"/>
          </div>
  
          <input className="but_send" type="submit" value="Отправить" />
        </form>
       
  
      </div>
    )
}

export default Callback