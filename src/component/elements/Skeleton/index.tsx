import Skeleton from '@mui/material/Skeleton';
type SkeletorProps = {
  variant?: "text" | "rectangular" | "circular";
  width?: string | number;
  height?: string | number;
  animation?: "wave" | "pulse";
}
function SkeletonComponent( { variant, width, height, animation}:SkeletorProps) {
  return (<Skeleton variant={variant} width={width} animation={animation} height={height} />)
}

export default SkeletonComponent;