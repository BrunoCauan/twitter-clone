import { useContext } from 'react';
import { UserContext } from '../../contexts/User.context';

export function Profile() {
    const { user } = useContext(UserContext);
    
    return (
        <>
            <header>
                <h2>{ user?.name }</h2>
            </header>
        </>
    );
}