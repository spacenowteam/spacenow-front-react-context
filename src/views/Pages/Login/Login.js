import React, { useState, useReducer, useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from '../../../context/actions/auth'
import { useAuth } from '../../../context/providers/AuthProvider'
import logo from "../../../assets/img/pages/login/login.png";

const Login = props => {

  const [_login, _setLogin] = useState({
    email: "",
    password: ""
  });

  const [login, dispatch] = useAuth();

  const submit = async _ev => {
    _ev.preventDefault();

    const variables = {
      email: _login.email,
      password: _login.password
    };

    dispatch({ type: USER_LOGIN, payload: variables });
    console.log(login.resp);

    // const bodyRequest = {
    //   query: `query (
    //       $email: String!,
    //       $password: String!,
    //     ) {
    //         userLogin (
    //           email: $email,
    //           password: $password,
    //         ) {
    //           status
    //         }
    //       }`,
    //   variables
    // };

    // const resp = await fetch("http://localhost:3000/graphql", {
    //   method: "POST",
    //   body: JSON.stringify(bodyRequest),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Autorization: "Test"
    //   }
    // });
    
    // const { data } = await resp.json();

    // if (data.userLogin.status == "success") {
    //   dispatch({ type: USER_LOGIN_SUCCESS, isLoggedIn: true });
    //   console.log(login)
    // }
    // else 
    //   dispatch({ type: USER_LOGIN_FAILURE });

  };

  return (
    
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup className="border-transparent">
              <Card
                className="d-md-down-none border-0"
                style={{
                  width: "44%",
                  backgroundImage: `url(${logo})`,
                  backgroundSize: `cover`
                }}
              />
              <Card className="p-4 border-0">
                <CardBody>
                  <h1>Sign in</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <Button className="my-3 btn-lg btn-block" color="google-plus">
                    <i className="fa fa-google" /> Sign in with Google
                  </Button>
                  <Button className="my-3 btn-lg btn-block" color="facebook">
                    <i className="fa fa-facebook" /> Sign in with Facebook
                  </Button>
                  <p className="text-muted text-center">or use your email</p>
                  <Form onSubmit={submit}>
                    <InputGroup className="mb-3 input-group-lg">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={e =>
                          _setLogin({ ..._login, email: e.target.value })
                        }
                      />
                    </InputGroup>
                    <InputGroup className="mb-4 input-group-lg">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={e =>
                          _setLogin({ ..._login, password: e.target.value })
                        }
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6" className="text-left">
                        <Button color="link" className="px-0 btn-sm">
                          Forgot password?
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button
                          color="primary"
                          className="px-4 btn-pill btn-sm"
                        >
                          Login
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-left">
                        <Button color="gray" className="px-0 btn-sm">
                          Not a member? Sign Up
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login;
