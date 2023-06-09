import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Products from '../components/Products';

const ProductsContainer = styled.div`
  
`
const Title = styled.h2`
  padding: 0 20px;
`
const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
`
const Filter = styled.div`
  
`
const FilterLabel = styled.span`
  font-weight: bold;
  font-size: 20px;
`
const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const Option=styled.option`

`

const ProductList = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <ProductsContainer>
                <Title>Dresses</Title>
                <FiltersContainer>
                    <Filter>
                        <FilterLabel>Filter Products:</FilterLabel>
                        <Select>
                            <Option disabled selected>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XXL</Option>
                        </Select>
                        <Select>
                            <Option disabled selected>Color</Option>
                            <Option>Red</Option>
                            <Option>Green</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterLabel>Sort Products:</FilterLabel>
                        <Select>
                            <Option selected>Latest</Option>
                            <Option>Price(asc)</Option>
                            <Option>Price(desc)</Option>
                        </Select>
                        </Filter>
                </FiltersContainer>

                <Products />
                
            </ProductsContainer>
            <Footer />
        </>
    );
}
export default ProductList;