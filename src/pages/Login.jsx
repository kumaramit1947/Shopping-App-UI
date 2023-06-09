import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(255, 100, 200, 0.5),
  rgba(200, 100, 200, 0.5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;


`
const Wrapper = styled.div`
  height: 50vh;
  width: 340px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.5);
  background: #f4f4f4;
  border-radius: 10px;
`
const Quotes=styled.div`
  padding: 20px;
  text-align: center;
  q{
    font-weight: 100;
  }
`
const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 20px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 5px;
  padding-left: 5px;

`
const Button=styled.button`
  cursor: pointer;
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid teal;
  outline: none;
  color: teal;
  &:hover{
    background: teal;
    color: white;
  }
`
const Notice = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`
const Span = styled.span`
  
`
const Link = styled.a`
  text-decoration: none;
  color: teal;
  font-size: 18px;
`
const Login = () => {
    return (
        <>
            <Container>
                <Wrapper>
                  <Quotes>
                    <q>Fashion is like eating, you should not stick to the same menu.</q>
                    <br/>
                    <cite>— Kenzo Takada</cite>
                  </Quotes>
                    <Form>
                        <InputContainer>
                            <Input type='email' placeholder='Email' />
                            <Input type='password' placeholder='Password' />
                            <Button>Login</Button>
                        </InputContainer>
                        <Notice>
                            <Span>New user?</Span> <Link href='#'>Register here!</Link>
                        </Notice>

                    </Form>
                </Wrapper>
            </Container>
        </>
    );
}
export default Login;