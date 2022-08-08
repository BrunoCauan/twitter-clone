import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User.context';

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
            <header>
                <h2>Login</h2>
            </header>

            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    );
}