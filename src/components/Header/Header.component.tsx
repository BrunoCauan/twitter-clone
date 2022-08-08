import { ReactComponent as Back } from '../../assets/icons/back.svg';
import { BackRoute, HeaderComponent } from './Header.styles';

interface HeaderProps {
    hasBackButton?: boolean;
    title: string;
}

export function Header({ hasBackButton = false, title }: HeaderProps) {
    return (
        <HeaderComponent>
            { hasBackButton &&
                <BackRoute to='/home'>
                        <Back />
                </BackRoute>
            }

            <h2>{ title }</h2>
        </HeaderComponent>
    )
}