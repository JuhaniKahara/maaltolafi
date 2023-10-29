import './App.css';
import * as React from 'react';
import { Button, TextField } from '@mui/material';

function NameGenerator() {
  const [name, setName] = React.useState("")
  const [maaltolaNme, setMaaltolaName] = React.useState("")
  const [isValid, setIsValid] = React.useState(false)

  const validateName = () => {
    if (name.includes('<') || name.includes('>')) {
      alert(`Bro yrittää XSS injektiota? Sivusto on suojattu parhaalla CIA:n teknologialla, joten yrityksesi ovat turhia!`)
      return
    }
    else if (Math.random() < 0.2) {
      alert(`${name} ei ole mikään oikea nimi. Ole hyvä, ja anna oikea nimesi!`)
      return
    }
    else if (name.split(' ').length !== 2) {
      alert(`Anna etu- ja sukunimesi välilyönnillä erotettuna, ole hyvä!`)
      return
    }
    setIsValid(true)
  }


  const generateName = () => {
    validateName()
    const firstName = name.split(' ')[0]
    setMaaltolaName(`${firstName.charAt(0).toUpperCase() + firstName.slice(1)} Aaltola`)

  }

  return (
    <div >
      <h1>Mika Aaltola -nimigeneraattori</h1>
      <TextField
        id="outlined-controlled"
        label="Kirjoita etu- ja sukunimesi"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Button onClick={generateName}>Generoi</Button>
      {maaltolaNme !== '' && isValid && <div><h2>Mika Aaltola -nimesi on {maaltolaNme}</h2></div>}
    </div>
  );
}

export default NameGenerator;
