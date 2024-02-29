import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getErrorSelector,
  getPendingSelector,
  getProfileSelector,
} from "@/store/auth/selectors";
function Header() {
  const profile = useSelector(getProfileSelector);
  return (
    <div className="wrapper-header">
      <img
        src="https://www.cbvj.org.br/index/wp-content/uploads/2017/10/default-logo.png"
        alt="logo"
        width="600"
        height="400"
      />
      <h2>Blogs</h2>
      {profile ? (
        <div>{profile?.name}</div>
      ) : (
        <Link href={"/login"}>LogIn</Link>
      )}
    </div>
  );
}

export default Header;
