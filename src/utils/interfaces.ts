
export interface IButton extends React.ComponentProps<'button'>{
    children : React.ReactNode;
    variant ?: 'primary'|'secondary'|'danger';
    size ?: 'small'|'medium'|'large';
    className ?: string;
}