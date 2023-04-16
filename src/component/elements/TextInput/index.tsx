import Skeleton from "../Skeleton";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("./component"),
  { loading: () => <Skeleton animation="wave" variant="rectangular" height={48}/> }
);


export default function Index(props:any) {
  return <DynamicComponent {...props} />
}