import React from "react";
import { c } from "classy-ui/macro";

const MyComponent = () => (
  <div className={c("background-color-green")}>
    This is my inline awesome grey bacgkround
  </div>
);

function App() {
  return <MyComponent />;
}

export default App;
