import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirmEmail, setConfirmEmail] = useState("")
const [birthDate, setBirthDate] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [skinColor, setSkinColor] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeConfirmEmail = (event) => {
  setConfirmEmail(event.target.value)
}

const onChangeBirthDate = (event) => {
  setBirthDate(event.target.value)
}

const onChangePhoneNumber = (event) => {
  setPhoneNumber(event.target.value)
}

const onChangeSkinColor = (event) => {
  setSkinColor(event.target.value)
}

const sendData = () => {

  if (
    (name.length >= 10) &&
    (name.length <= 30) &&
    (age >= 18) &&
    (email === confirmEmail) &&
    (email.includes('@')) &&
    (email.includes('.'))
    )
  {
    setName("")
    setAge("")
    setEmail("")
    setConfirmEmail("")
    setFormFlow(2)
  } else {
    alert("Formulário preenchido incorretamente, tente de novo.")
    setName("")
    setAge("")
    setEmail("")
    setConfirmEmail("")
  }

}

const sendData2 = () => {

  if (
    (birthDate !== "") &&
    (phoneNumber !== "") &&
    (skinColor !== "") 
    )
  {
      alert("Inscrição finalizada")
      setBirthDate("")
      setPhoneNumber("")
      setSkinColor("")
      setFormFlow(1)
  } else {
    alert("Formulário preenchido incorretamente, tente de novo.")
  }

}


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name={name}
      age={age}
      email={email}
      confirmEmail={confirmEmail}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeConfirmEmail={onChangeConfirmEmail}
      onChangeAge={onChangeAge}
      sendData={sendData}
      /> : <ConfirmationForm
      birthDate={birthDate}
      onChangeBirthDate={onChangeBirthDate}
      phoneNumber={phoneNumber}
      onChangePhoneNumber={onChangePhoneNumber}
      skinColor={skinColor}
      onChangeSkinColor={onChangeSkinColor}
      sendData2={sendData2}
      />} 

      
    </MainContainer>
  )
}

export default MainPage