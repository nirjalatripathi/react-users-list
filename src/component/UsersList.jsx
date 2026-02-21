import React, {useState} from "react";
function UsersList() {
    
        const [users, setUsers] = useState([]);
        const addUser=() => {
            const newUser="User" + (users.length+1);
            setUsers([...users, newUser]);
        };

    
    return(
        <div>
            <h2> Users List</h2>

            <button onClick={addUser} > Add User</button>
            {users.length===0 && <p> No users found.</p>}

            <ul> 
                {users.map((user, index) => (
                    <li key={index} > {user}</li>

               ))}
            </ul>
        </div>
    );
}
export default UsersList;