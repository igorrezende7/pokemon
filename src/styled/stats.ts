import styled from 'styled-components'


export const StatsContent = styled.div`
position: relative;
`


export const Stat = styled.div<StatsProps>`

p{
  color: #f2f2f2;
  position: relative;

  &::before{
    content: "";
    position: absolute;
    width: ${prop => prop.stat}%;
    background-color: #fec20c;
    height: 7px;
    border-radius: 80px;
    left: 0;
    bottom: -10px;
    max-width: 100%;
  }

  &::after{
    content: "";
    position: absolute;
    width: 100%;
    max-width: 100%;
    background-color: #fec20c80;
    height: 7px;
    bottom: -10px;
    border-radius: 80px;
    left: 0;
  }
  }


`
interface StatsProps{
  stat:number
}
export const Statistics = styled.div<StatsProps>`
/* background-color: white; */
width: 100%;
position: relative;
left: .5rem;

`

export const TitleStat=styled.div`
position: relative;
`
