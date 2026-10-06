import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/usercontext";

export const Avatar = () => {
  const user = useContext(UserContext);
  return <div>Avatar {user.name}</div>;
};
export const Header = () => {
  return (
    <div>
      <Avatar />
    </div>
  );
};

export const Page = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
// Props drilling
export const MainComponent = () => {
  const [user, setUser] = useState({ name: "user" });

  return (
    <div>
      MainComponent
      <input
        value={user.name}
        type="text"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <UserContext.Provider value={user}>
        <Page />
      </UserContext.Provider>
    </div>
  );
};
