import styled from 'styled-components'
import { darken } from 'polished'

export const Card = styled.div`

  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 4px 10px 10px #00000050;
  background: #2d4596;
  border-radius: 5px;
  transition: .3s;
  cursor: pointer;
  /* &:hover{
    transform: scale(1.05);
  } */
`
export const CardImage = styled.div`
position: relative;
height: 0;
padding-bottom: 100%;
overflow: hidden;
width: 100%;
background-color: #fff;
border: 1rem outset #fec20c;
img{
  min-width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
`
export const CardTitle = styled.h2`
font-weight: bold;
margin-top: 1rem;
color: #f2f2f2;
flex: 1;
`
export const CardButton = styled.button`
padding: 1rem;
color: #f2f2f2;
background-color: #fec20c;
border: none;
width: 70%;
margin: 1rem auto;
border-radius: 10px 0px 10px 0px;
font-weight: bold;
font-size: 1.3em;
transition: .1s;
text-decoration: none;
text-align: center;
&:hover{
  background-color: ${darken(0.1, '#fec20c')};
}
`

export const CardOverAll = styled.h4`
position: absolute;
left: 0;
top: 0;
padding:.5rem;
background-color: #2d4596;
color: #f2f2f2;
border-radius: 0px 0px 5px 0px;
`
