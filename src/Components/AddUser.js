import { FormGroup,FormControl,InputLabel,Input,Typography,Button,styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from './service/api'

const Container = styled(FormGroup)`
        width:50%;
        margin:5% auto 0 auto;
        & > div{
            margin-top:20px
        }
`

const AddUser = () => {

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const navigate = useNavigate()

    const onAdd = async () => {
          await addUser({name:name,
                        username:username,
                        email:email,
                        phone:phone
        });
        navigate('/all');
    }


  return (
    <Container>
    <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={(e) => setName(e.target.value)} value={name}  id="my-input"/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name='username' onChange={(e) => setUsername(e.target.value)} value={username}  id="my-input"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email' onChange={(e) => setEmail(e.target.value)} value={email} id="my-input"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone no.</InputLabel>
            <Input name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} id="my-input"/>
        </FormControl>
        <FormControl>

            <Button variant='contained' color='primary' onClick={() => onAdd()}>Add User</Button>
        </FormControl>
    </Container>
  )
}

export default AddUser