
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