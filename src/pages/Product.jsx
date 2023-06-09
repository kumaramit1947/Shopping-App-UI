import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`
  display: flex;
  padding: 50px;
  align-items: start;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  height: 75vh;
  width: 85%;

`
const InfoContainer = styled.div`
  flex: 1;
`
const Title = styled.h2`
  font-size: 35px;
  font-weight: 100;
  padding-top: 0;
  margin-top: 0;
`
const Desc = styled.p`
  font-size: 18px;
  padding-right: 57px;
  color: #666;
`
const Price = styled.div`
  font-size: 45px;
  font-weight: 100;
  color: #666;
`
const FilterContainer=styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;
  gap: 40px;
`
const Filter=styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 20px 0;
`
const FilterTitle=styled.span`
  font-weight: 100;
  margin-right: 5px;
`
const FilterColor=styled.div`
  border: 1px solid black;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({color})=> color};
  opacity: 0.7;
  cursor: pointer;
`
const FilterSize=styled.select`
  
`
const Option=styled.option`

`
const AddContainer=styled.div`
  display: flex;
  gap: 40px;
  margin: 15px 0;

`
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const Amount=styled.span`
  height: 30px;
  width: 50px;
  border: 2px solid teal;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button=styled.button`
  border: 2px solid teal;
  cursor: pointer;
  padding: 10px;
  background: transparent;
  &:hover {
    background: #f4f4f4;
  }
`
const Product = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Container>
                <ImgContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Suit</Title>
                    <Desc>
                        This look was created in 1973. It is a blue wash denim leisure suit that consists of a matching jacket and pant. The front of the jacket is adorned with four round flap cargo pockets. It is finished with traditional denim top stitching complete with a self placket belt panel. Produced in Italy, Bill Kaiserman’s clothes became the standard in the American fashion market. The public welcomed the look as it was on trend at the time.
                    </Desc>
                    <Price>$50</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color='darkBlue'></FilterColor>
                            <FilterColor color='lightBlue'></FilterColor>
                            <FilterColor color='black'></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>L</Option>
                                <Option>M</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <AddIcon sx={{cursor: 'pointer'}}/>
                            <Amount>0</Amount>
                            <RemoveIcon sx={{cursor: 'pointer'}}/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Container>
            <Footer />

        </>
    );
}
export default Product;