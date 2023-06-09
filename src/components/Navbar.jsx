import styled from 'styled-components';
import '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Navbar = () => {
  const Container = styled.div`
       width: 100vw;
       height: fit-content;
       background: linear-gradient(#c4a49d, white);

    `
  const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
    `
  const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
    `
  const Language = styled.div`
      font-size: 14px;
      cursor: pointer;
      
    `
  const SearchContainer = styled.div`
      border: 1px solid grey;
      display: flex;
      align-items: center;
      margin-left: 20px;
    `
  const Input = styled.input`
      border: none;
      outline: none;
      background-color: transparent;
      padding-left: 10px;
    `
  const Center = styled.div`
      flex: 1;
    `
  const Logo = styled.h1`
      text-align: center;
      margin: 0;

    `
  const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `
  const MenuItem = styled.div`
      margin: 0 10px;
      cursor: pointer;
      font-size: 16px;
    `

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <SearchIcon sx={{color: 'rgba(0,0,0,0.6)'}} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>SHOPWA!</Logo>
          </Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
export default Navbar;