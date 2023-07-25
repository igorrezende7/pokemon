import styled from "styled-components";

export const Content = styled.div`

display: flex;
width: 100vw;
height: 100vh;
position: fixed;
padding: 3rem;
display: flex;
align-items: center;
flex-direction: column;
gap: 2rem;
.header{
  width: 80%;
  background-color: #f2f2f2;
  height: 50px;
  border-radius: 80px;
  position: relative;
  /* animation: opacity 2s ease-out infinite; */
  overflow: hidden;
  &::before{
    content: "";
    position: absolute;
    width:10px;
    top: 0;
    /* right: 0; */
    height: 100%;
    background-color: #e3e3e3;
    transform: rotate(5deg);
    animation: animaSkeleton 1s  infinite;
  }
}

.body{
  width: 80%;
  background-color: #f2f2f2;
  height: 500px;
  border-radius: 80px;
  position: relative;
  /* animation: opacity 2s ease-out infinite; */
  overflow: hidden;
  &::before{
    content: "";
    position: absolute;
    width:10px;
    top: 0;
    /* right: 0; */
    height: 100%;
    background-color: #e3e3e3;
    transform: rotate(5deg);
    animation: animaSkeleton 1s  infinite;
  }
}

@keyframes animaSkeleton{
  0%{
    left: 0;
  }
  100%{
    left: 100%;
  }
}

`
