import dynamic from "next/dynamic";
import Loader from "@/component/elements/Loader";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../component/pages/Login"),
  { loading: () => <Loader type="points" size="xl"/> }
);


export default function Index() {
  return <DynamicComponentWithNoSSR />
}