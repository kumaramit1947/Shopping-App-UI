import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  display: flex;
  width: 100vw;
  background-color: #6d918a;
`
const Left = styled.div`
  flex: 1;
//   border: 1px solid blue;
  padding: 20px;
`
const Logo = styled.h2`
  
`
const Desc = styled.p`
  
`
const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`
const Center = styled.div`
  flex: 1;
//   border: 1px solid black;
  padding: 20px;
`
const Title = styled.h3`
  
`
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
  
`
const Right = styled.div`
  flex: 1;
//   border: 1px solid red;
  padding: 20px;
`
const ContactItem=styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`
const Footer = () => {
    return (
        <>
            <Container>
                <Left>
                    <Logo>SHOPWA!</Logo>
                    <Desc>
                        <q>Style is something each of us already has, all we need to do is find it.</q>
                        <br />
                        <b><cite>— Diane von Furstenberg</cite></b>
                    </Desc>
                    <SocialContainer>
                        <SocialIcon>
                            <FacebookIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <InstagramIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <TwitterIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <PinterestIcon />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contacts</Title>
                    <ContactItem><LocationOnIcon/><span>393, We Work, Vi Tower, Haryana</span></ContactItem>
                    <ContactItem><PhoneAndroidIcon/><span>+0542-2281648</span></ContactItem>
                    <ContactItem><EmailIcon/><span>helpline@shopwa.com</span></ContactItem>
                </Right>
            </Container>
        </>
    );
}
export default Footer;