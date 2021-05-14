import { useEffect } from "react";

import { useUserStore } from "./store";

const Example = () => {
  const {
    email,
    login,
    isLoading,
    users,
    actions: { setEmail, setLogin, resetUser, getUsers },
  } = useUserStore();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div style={{ padding: "0 20px" }}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Login</label>
          <input value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div>
          <button onClick={() => resetUser()}>Reset user</button>
        </div>
        <div>
          <b>Email (value from the redux store):</b>{" "}
          {email || "Email is not defined"}
        </div>
        <div>
          <b>Login (value from the redux store):</b>{" "}
          {login || "Login is not defined"}
        </div>
      </div>
      <h4>Async action example</h4>
      <div style={{ padding: "0 20px" }}>
        {isLoading ? (
          <div>Loading users...</div>
        ) : (
          <div>
            <b>Users</b>
            {users.map((usr) => (
              <div key={usr}>{usr}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Example;
