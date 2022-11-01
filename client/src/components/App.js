import { useState } from 'react';
import styled from 'styled-components'

function App() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    fetch(`/submit`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
      .then(data => console.log(data.message))
  }

//   const handleSubmit2 = (ev) => {
//     ev.preventDefault()
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => {
//         console.log("First user in the array:");
//         console.log(json[0]);
//         console.log("Name of the first user in the array:");
//         console.log(json[0].name);
// })
  // }
  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledHeader>A Registration Form:</StyledHeader>
        <label>Username</label>
        <SyledInput type="text" id="username" value={formData.username} onChange={(ev) => handleChange(ev.target.id, ev.target.value)} />

        <label>Password</label>
        <SyledInput type="password" id="password" value={formData.password} onChange={(ev) => handleChange(ev.target.id, ev.target.value)} />

        {console.log("formData", formData)}

        <button type='submit'>Submit</button>
      </StyledForm>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: #f6f7fc;
  border-radius: 4px;
  box-shadow: 0 60px 120px rgba(71, 69, 123, 0.24),
    0 15px 35px rgba(71, 69, 123, 0.24);
  width: 340px;
  padding: 14px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`

const StyledHeader = styled.h1`
  color: black;
`

const SyledInput = styled.input`
  padding: 3px;
  margin: 5px;
`

const SyledButton = styled.button`
  border-radius: 2.5px;
  padding: 3px;
  margin: 5px;
`

export default App;
