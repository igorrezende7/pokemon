import styled from "styled-components";

interface SkeletonProps{
  open:boolean
}

export const Content = styled.div<SkeletonProps>`

display: ${props => props.open ? 'flex' : 'none'};
width: 100vw;
height: 100vh;
position: fixed;
align-items: center;
justify-content: center;
background-color: #00000095;
z-index: 999;
left: 0;
top: 0;
img{
  width: 50px;
  height: 50px;
  animation: animaSkeleton 1s linear infinite;
}
@keyframes animaSkeleton{
  0%{
    transform:scale(.8);
  }
  50%{
    transform:scale(1);
  }
  100%{
    transform:scale(.8);
  }
}

`
