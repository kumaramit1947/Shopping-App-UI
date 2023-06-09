import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
  height: 320px;
  width: 300px;
  background-color: #e7fbf6;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid white;
`
const Circle=styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  width: 75%;
//   object-fit: contain;
  z-index: 2;
`
const InfoContainer=styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 5;
  opacity: 0;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 1;
  }


`
const Icon=styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #e7fbf6;
    transform: scale(1.1);
  }
`
const ProductItem = ({ item }) => {
    return (
        <>
            <Container>
                <Circle />
                <Image src={item.img} />
                <InfoContainer>
                    <Icon>
                    <ShoppingCartOutlinedIcon />
                    </Icon>
                    <Icon>
                        <SearchOutlinedIcon />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlinedIcon />
                    </Icon>
                </InfoContainer>
            </Container>

        </>
    );
}
export default ProductItem;