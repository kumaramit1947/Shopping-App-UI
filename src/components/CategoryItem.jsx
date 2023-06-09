import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 60vh;
  border: 2px solid grey;
  position: relative;
`
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const InfoContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
`
const Title = styled.h3`
  color: white;
  text-shadow: 5px 5px 15px rgba(0,0,0,1);
`
const Button = styled.button`
  border: none;
  padding: 10px;
  color: grey;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`
const CategoryItem = ({ item }) => {
    return (
        <>
            <Container>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Button>Show Me</Button>
                </InfoContainer>
            </Container>

        </>
    );
}
export default CategoryItem;