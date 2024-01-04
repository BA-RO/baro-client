import * as styles from './style.css';

interface BadgeProps {
  text: string;
  color:
    | 'blue'
    | 'green'
    | 'yellow'
    | 'red'
    | 'orange'
    | 'purple'
    | 'grey'
    | 'black';
}

const Badge = ({ text, color }: BadgeProps) => {
  return <span className={styles.badge({ color })}>{text}</span>;
};

export default Badge;
