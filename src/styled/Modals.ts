import styled from 'styled-components'
import { darken } from 'polished'
interface ModalProps{
  open:boolean
}

export const Modal = styled.div<ModalProps>`
height: 100vh;
width: 100vw;
padding: 0;
z-index: 997;
position: fixed;
top: 0;
left: 0;
display: ${props => props.open ? "flex" :"none"};
justify-content: center;
align-items: start;

`

export const CloseModal = styled.span`
margin-bottom: 1rem;
text-align: right;
svg{
  color: #f2f2f2;
  width: 40px;
  height: 25px;
  transition: .2s;
  &:hover{
    color: ${darken(0.2, "#f2f2f2")};
  }

}
`

export const ModalClique = styled.div`
position: fixed;
z-index: 997;
height: 100vh;
width: 100vw;
background-color: #00000090;
`

export const ModalContent = styled.div<ModalProps>`
padding:1rem;
width: 25rem;
height: 400px;
position: relative;
z-index: 999;
top: 4rem;

animation: ${props => props.open ? "modalOpen .2s linear forwards" : ""};

@keyframes modalOpen{
  0%{
    transform: scale(.5);
  }
  100%{
    transform: scale(1);
  }
}
`
