import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <div>
        <h1>🤵🤵 USERS</h1>
        <UserList />
        <AddUser />
      </div>
    </>
  );
}

export default App;
