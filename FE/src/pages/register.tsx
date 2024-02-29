import * as declaration from "@/common/config/path.config";
import { createDynamicComponent } from "@/utils/dynamicComponent";

const DynamicComponent = createDynamicComponent(
  declaration.DYNAMIC_TYPE.REGISTER,
);

export default function Index() {
  return <DynamicComponent />;
}
