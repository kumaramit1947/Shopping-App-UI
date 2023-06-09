import styled from 'styled-components';
import {categories} from '../data.js';
import CategoryItem from './CategoryItem';

const Container=styled.div`
  display: flex;
  padding: 20px;
  gap: 10px;

`

const Categories=()=>{
    return(
        <>
        <Container>
            {categories.map((item)=>{
                return (
                    <CategoryItem item={item} key={item.id} />
                );
            })}
        </Container>
        </>
    );
}
export default Categories;