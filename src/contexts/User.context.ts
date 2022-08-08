import { createContext } from 'react'
import { UserModel } from '../models/User.model';

type UserContextType = {
    user: UserModel | null,
    setUser: React.Dispatch<React.SetStateAction<UserModel | null>>
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {}
});