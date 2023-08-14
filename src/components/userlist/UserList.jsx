// CSS
import "./UserList.css";
//
function UserList({ users, deleteUser }) {
  console.log(users);
  return (
    <div className="userList">
      <div className="container userList-container">
        {users.map((user) => {
          const { image, age, firstName, lastName, job, id, from, gender } =
            user;

          return (
            <div className="card" key={id}>
              <div className="card-inner">
                <img
                  src={image}
                  alt={(firstName, lastName)}
                  width={150}
                  height={150}
                />
                <h3>
                  {firstName} {lastName},{age} age
                </h3>
                <p>From: {from}</p>
                <p>Job: {job}</p>
                <p>Gender: {gender}</p>
                <button
                  onClick={() => {
                    deleteUser(id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
