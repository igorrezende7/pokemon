import { Content } from "./styled";
import bola from '../../images/bola.png'
interface SkeletonProps{
  open:boolean
}
const Skeleton = ({open}:SkeletonProps) => {
  
  return (
    <>
      <Content open={open}>
        <img src={bola} alt="" className="img-fluid" />
      </Content>
    </>
  );
};

export default Skeleton;
