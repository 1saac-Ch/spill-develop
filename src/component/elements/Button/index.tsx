import dynamic from "next/dynamic";
import Skeleton from "../Skeleton";
const DynamicComponent = dynamic(
  () => import("./component"),
  { loading: () => <Skeleton animation="wave" variant="rectangular" height={48} /> }
);


export default function Index(props:any) {
  return <DynamicComponent {...props} />
}