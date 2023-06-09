import styled from 'styled-components';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from 'react';
import { sliderItems } from '../data.js';
const Container = styled.div`
      width: 100vw;
      height: 86vh;
      position: relative;
      overflow: hidden;
    `
const Arrow = styled.div`
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${({ direction }) => direction === 'left' && '20px'};
      right: ${({ direction }) => direction === 'right' && '20px'};
      margin: auto;
      cursor: pointer;
      opacity: 0.5;
      z-index: 2;
      &:hover {
        opacity: 0.8;
      }
    `
const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      transform: ${({ slideIndex }) => `translateX(${slideIndex * 100}vw)`};
      transition: transform 1s ease-in-out;
    `
const Slide = styled.div`
      height: 100%;
      min-width: 100%;
      display: flex;
      align-items: center;
      background-color: #${({bg})=> bg};
      
    `
const ImgContainer = styled.div`
      height: 95%;
      flex: 1;
    `
const Image = styled.img`
      height: 100%;
      transform: scaleX(-1);
    `
const InfoContainer = styled.div`
      flex: 1;
    `
const Title = styled.h2`
    font-size: 60px;
    margin-bottom: 0;
    font-variant: small-caps;
  `
const Desc = styled.p`
    font-size: 25px;
    letter-spacing: 3px;
  `
const Button = styled.button`
    padding: 10px;
    font-size: 22px;
    background-color: transparent;
    cursor: pointer;
  `

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direct) => {
    const len=sliderItems.length;
    setSlideIndex((prev) => {
      if(direct === 'left' && prev<0) return prev+1;
      if(direct === 'right' && prev>-len+1) return prev-1;
      return prev;
    });
  }
  return (<>
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}><ArrowBackOutlinedIcon /></Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => 
          (<Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image
                src= {item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
              <span>{item.desc.split('!')[0]+'!'}</span>
              <br/>
              <span>{item.desc.split('!')[1]}</span>
              </Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>)
        )}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}><ArrowForwardOutlinedIcon /></Arrow>
    </Container>
  </>);
}
export default Slider;