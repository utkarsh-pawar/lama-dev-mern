import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0, 0.35), rgba(0, 0, 0, 0.35)),
    url('https://i.ibb.co/cvY0vSv/clark-street-mercantile-P3p-I6xzovu0-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border:none;padding: 15px 20px;
  background-color: teal;
  color:white;
  cursor:pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOG IN</Button>
          <Link>Do not remember the password?</Link>
          <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
