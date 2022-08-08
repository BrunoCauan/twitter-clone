import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User.context';
import { Header } from '../../components/Header/Header.component';

export function Login() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        setUser({
            name: 'Brino',
            userName: 'brunocauans',
            profilePictureURL: '',
            id: '123'
        });

        navigate('home');
    };
    
    return (
        <>
            <Header title="Login" />

            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    );
}