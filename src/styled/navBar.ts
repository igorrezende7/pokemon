import styled from 'styled-components'

export const Nav = styled.div`
  width: 100%;
  height: auto;
  background-color: #373737;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 1rem;
  overflow: hidden;
  gap: 2rem;
  @media screen and (max-width: 767px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  label,input,svg{
    color: #f2f2f2;
  }
  fieldset{
    border-color: #f2f2f2;
  }
`

export const ImgNav = styled.img`
width: 20rem;
height: auto;
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
export const ButtonNav = styled.button`
padding: .5rem 2rem;
border: none;
background-color: #fec20c;
color: #2d4596;
font-weight: 500;
border-radius: 5px;
font-size: 1.2em;
transition: .3s;
&:hover{
  background-color:#2d4596;
  color:  #fec20c;
}
`
