
export interface IButton extends React.ComponentProps<'button'>{
    children : React.ReactNode;
    variant ?: 'primary'|'secondary'|'danger';
    size ?: 'small'|'medium'|'large';
    className ?: string;
}

export interface ICard {
     children : React.ReactNode;
     color ?: "green"|"blue"|"purple"|"orange";
     title : string;
}

export interface IUserCard extends Pick<ICard, "children"|"color">{
        profilePic ?: string; 
        userName : string;
        email ?: string;
        tags ?: string[]
}

export interface IInput extends React.ComponentProps<'input'>{
     className ?: string;
}