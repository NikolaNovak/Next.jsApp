import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => (
  <div>
    <h1>The auth index page - {props.appName}</h1>
    <User name="Someone" age="22" />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
