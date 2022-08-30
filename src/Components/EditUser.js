import { FormGroup,FormControl,InputLabel,Input,Typography,Button,styled } from '@mui/material'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser,editUser } from './service/api'

const Container = styled(FormGroup)`
        width:50%;
        margin:5% auto 0 auto;
        & > div{
            margin-top:20px
        }
`


const EditUser = () => {
    const [name, setName] = useState([])
    const [username, setUsername] = useState([])
    const [email, setEmail] = useState([])
    const [phone, setPhone] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const getUsers = async () => {
           let response = await getUser(id)
            setName(response.data.name);
            setUsername(response.data.username);
            setEmail(response.data.email);
            setPhone(response.data.phone)

    }

    const EditUser = async () => {
            await editUser({name:name,
                username:username,
                email:email,
                phone:phone
            },id);
            navigate('/all');
    }

    useEffect(() => {
      getUsers()
    }, [])
    

  return (
    <Container>
    <Typography variant='h4'>Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input  name='name' onChange={(e) => setName(e.target.value)} value={name} id="my-input"/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input  name='username' onChange={(e) => setUsername(e.target.value)} value={username} id="my-input"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input  name='email'onChange={(e) => setEmail(e.target.value)} value={email} id="my-input"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone no.</InputLabel>
            <Input name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} id="my-input"/>
        </FormControl>
        <FormControl>
            <Button variant='contained' color='primary' onClick={(e) => EditUser()}>Add User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser;