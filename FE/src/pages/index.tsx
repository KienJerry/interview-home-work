import { useEffect } from "react";
import { connect } from "react-redux";
import { END } from "redux-saga";

import Homepage from "@/containers/Homepage";
import { getUserRequest } from "@/store/auth/actions";
import { getTest } from "@/store/Blog/actions";

const mapStateToProps = (state: any) => ({
  data: state.data,
});

const mapDispatchToProps = {
  fetchData: getUserRequest,
  fetchTest: getTest,
};

function Index({ data, fetchData }: any) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Homepage />;
}

Index.getInitialProps = async ({ reduxStore, req, store }: any) => {
  const isServer = !!req;

  if (isServer) {
    reduxStore.dispatch(getUserRequest());
    reduxStore.dispatch(getTest({ data: 123 }));
    reduxStore.dispatch(END);
    await reduxStore.sagaTask.toPromise();
  }

  return { data: store };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
