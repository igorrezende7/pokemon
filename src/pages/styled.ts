import styled from 'styled-components'

export const Shadow = styled.div`
position: relative;
width: 80%;
margin: 0 auto;

&::before{
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    box-shadow: -10px 5px 10px #000;
}

&::after{
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    right: 0;
    top: 0;
    box-shadow: 10px 5px 10px #000;
}

`