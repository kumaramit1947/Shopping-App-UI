import styled from 'styled-components';
const Announcement = () => {
    const Container=styled.div`
      height: 30px;
      width: 100vw;
      background: teal;
      text-align: center;
      color: white;
      font-size: 14px;
      padding: 5px;
    `
    return (
        <>
        <Container>Something is coming soon in the Announcement!</Container>
        </>
    )
}
export default Announcement;