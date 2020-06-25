import React from 'react'

import { Form, Button } from 'react-bootstrap';

import * as Icon from 'react-bootstrap-icons';

import './FormRegister.css';

const FormRegister = () => {
  return (
    <Form className="form-box">
      <Form.Group controlId="formBasicPassword">
        <Icon.PersonFill color="#65AD2F" size={24}/>
        <Form.Label className="title-form">Nome Completo</Form.Label>
        <Form.Control type="name" placeholder="Nome" className="input-form"/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Icon.At color="#65AD2F" size={24}/>
        <Form.Label className="title-form">Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" className="input-form"/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Icon.BriefcaseFill color="#65AD2F" size={24}/>
        <Form.Label className="title-form">RA</Form.Label>
        <Form.Control type="number" placeholder="Registro Acadêmico" className="input-form"/>
      </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Icon.LockFill color="#65AD2F" size={24}/>
      <Form.Label className="title-form">Senha</Form.Label>
      <Form.Control type="password" placeholder="Senha" className="input-form"/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Icon.LockFill color="#65AD2F" size={24}/>
      <Form.Label className="title-form">Repita sua senha</Form.Label>
      <Form.Control type="password" placeholder="Senha" className="input-form"/>
    </Form.Group>

    <Button variant="primary" type="submit" className="button-form">
      Concluído
    </Button>
  </Form>
  )
}

export default FormRegister;