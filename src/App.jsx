// CSS
import "./App.css";
// hooks
import { useState } from "react";
// components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewUserForm from "./components/newuser/NewUserForm";
import UserList from "./components/userlist/UserList";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  // delete user
  function deleteUser(id) {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  }
  // close modal
  function closeModal(e) {
    if (e.target.className === "overlay") {
      setShowModal(false);
    }
    if (e.key == "Escape") {
      setShowModal(false);
    }
  }
  // add user
  function addUser(user) {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  }
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList deleteUser={deleteUser} users={users} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
