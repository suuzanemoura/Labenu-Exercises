import React from 'react'
import { Form, Input } from '../MainPage/styles'

const ConfirmationForm = ({birthDate, onChangeBirthDate, phoneNumber, onChangePhoneNumber, skinColor, onChangeSkinColor, sendData2}) => {
  return (
    <Form>
      <label>
          Data de Nascimento:
          <Input placeholder="XX/XX/XXXX" type="date" value={birthDate} onChange={onChangeBirthDate} />
        </label>
        <label>
          Número de telefone:
          <Input placeholder="(00) 00000-0000" type="tel" value={phoneNumber} onChange={onChangePhoneNumber}/>
        </label>
        <label>
          Sou autodeclarado(a):
  <select value={skinColor} onChange={onChangeSkinColor}>
    <option value="">Escolha uma opção abaixo:</option>
    <option value="negro">Negro(a)</option>
    <option value="branco">Branco(a)</option>
    <option value="pardo">Pardo(a)</option>
    <option value="amarelo">Amarelo(a)</option>
    <option value="indígena">Indígena</option>
    <option value="Prefiro não dizer">Prefiro não dizer</option>
  </select>
        </label>

      <button onClick={sendData2}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm