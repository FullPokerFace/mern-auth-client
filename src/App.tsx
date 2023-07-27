import "./App.css";
import ActivitiesTab from "./ui-layer/activities/activities-tabs/activities-tab";
import Login from "./ui-layer/auth/login/login";
import Header from "./ui-layer/header/header";
const token = localStorage?.getItem("token");

function App() {
  return (
    <>
      <Header />
      {token ? <ActivitiesTab /> : <Login />}
    </>
  );
}

export default App;
