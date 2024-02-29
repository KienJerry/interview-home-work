import Header from "@/components/Header";
import type * as IMain from "@/interfaces/layouts/main.interface";
import { Meta } from "@/layouts/Meta";

function Main(props: IMain.IMainProps) {
  return (
    <>
      <Meta {...props.meta} />
      <Header />
      {props.children}
    </>
  );
}

export default Main;
