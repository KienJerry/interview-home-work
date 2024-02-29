import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserRequest } from "@/store/auth/actions";
import { getProfileSelector } from "@/store/auth/selectors";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector(getProfileSelector);

    useEffect(() => {
      dispatch(getUserRequest());
    }, []);

    return profile ? <Component /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
