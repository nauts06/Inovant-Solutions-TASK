import React from "react";
import SignUp from "./Components/auth/SignUp";
import Crud from "./Components/crud/Crud";
import RoutesL from "./routes/Routes";
import Sidebar from "./Components/Sidebar";
import {FriendList} from "./Components/auth/Try";

const App = () => {
  return (
    <div>
      <RoutesL />
      {/* <FriendList/> */}
    </div>
  );
};

export default App;
