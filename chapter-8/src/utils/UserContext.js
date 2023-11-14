import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Md Sazzad alam",
        email: "hero@gmail.com"
    },
});
UserContext.displayName = "UserContext";
export default UserContext;