
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("./component")
);


export default function Index(props:any) {
  return <DynamicComponent {...props} />
}