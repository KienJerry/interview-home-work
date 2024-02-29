import type { ReactNode } from "react";

import type * as IMeta from "@/interfaces/layouts/meta.interface";

export interface IMainProps {
  meta?: IMeta.IMetaProps;
  children?: ReactNode;
  noContainer?: boolean;
  noHeader?: boolean;
  noFooter?: boolean;
  id?: string;
  headerLanding?: boolean;
}
