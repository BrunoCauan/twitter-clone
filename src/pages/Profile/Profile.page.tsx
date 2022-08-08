import { useContext } from 'react';
import { Header } from '../../components/Header/Header.component';
import { UserContext } from '../../contexts/User.context';

export function Profile() {
    const { user } = useContext(UserContext);
    
    return (
        <>
            <Header title={user?.name || ''} hasBackButton={true} />
        </>
    );
}