import styled from 'styled-components';
import {popularProducts} from '../data.js';
import ProductItem from './ProductItem';

const Container=styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100vw;
  padding: 40px;
  background-color: #e6d2d1;
`
const Products=()=>{
    return(
        <>
        <Container>
            {popularProducts.map((item)=>{
                return(
                    <ProductItem key={item.id} item={item}/>
                );
            })}
        </Container>
        </>
    );
}
export default Products;