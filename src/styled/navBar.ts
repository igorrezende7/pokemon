import styled from 'styled-components'

export const Nav = styled.div`
  width: 100vw;
  height: auto;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 3rem;
  overflow: hidden;
  @media screen and (max-width: 767px){
    flex-direction: column;
    align-items: start;
  }
`

export const ImgNav = styled.img`
width: 100%;
height: 100%;
scale: .4;
animation: flutua 7s linear infinite;
cursor: pointer;
@keyframes flutua{
  0%{
    transform: translate(10px, 10px);
  }
  50%{
    transform: translate(0px, 0px);
  }
  100%{
    transform: translate(10px,10px);
  }
}
`
