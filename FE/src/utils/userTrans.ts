import { useRouter } from "next/router";

import en from "@/lang/en.json";
import vi from "@/lang/vi.json";

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "vi" ? vi : en;

  return trans;
};

export default useTrans;
