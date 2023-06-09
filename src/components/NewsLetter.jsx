import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 20px 0 50px 0;
  margin-bottom: 50px;
`
const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 10px;
`
const Desc = styled.p`
  margin-top: 0;
  font-size: 25px;
  margin-bottom: 20px;
  color: rgba(0,0,0,0.7);
`
const InputContainer = styled.div`
  box-sizing: border-box;
  height: 40px;
  width: 25%;
  display: flex;
  background-color: white;
  border: 2px solid teal;
`
const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;

`
const Button =styled.button`
  flex: 2;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
  color: white;
`
const NewsLetter = () => {
    return (
        <>
            <Container>
                <Title>Newsletter</Title>
                <Desc>Get timely updates from your favourite products!</Desc>
                <InputContainer>
                    <Input type='email' placeholder='abc@gmail.com' />
                    <Button><SendIcon/></Button>
                </InputContainer>
            </Container>
        </>
    )
}
export default NewsLetter;