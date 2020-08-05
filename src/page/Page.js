import React from "react";

const Page = (props) => {
  const { route } = props;
  return <div>{route.component ? <route.component {...props} /> : null}</div>;
};

export default Page;
