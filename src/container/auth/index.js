import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Login } from "./_login";
import { authGooglePlusUsers } from "./../../store/actions";

export default (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const { authStore } = useSelector((state) => {
    return {
      authStore: state.AuthStore,
    };
  });

  React.useEffect(() => {
    console.log('--== 3) Login <:::> onAuthGooglePlusUsers ==--', authStore.forward);
    if (authStore.forward) {
      history.push({ ...authStore.forward });
    }
  }, [history, authStore]);

  const onAuthGooglePlusUsers = (params) => {
    console.log('--== 1) Login <:::> onAuthGooglePlusUsers ==--', params);
    dispatch(authGooglePlusUsers(params));
  };
  return (
    <div className="container-fluid h-100">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col col-sm-12 col-md-12 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
          <Login googlePlusAuth={onAuthGooglePlusUsers} />
        </div>
      </div>
    </div>
  );
};
