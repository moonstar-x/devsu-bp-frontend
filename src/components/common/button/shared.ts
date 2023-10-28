import styles from './styles.module.scss';

export type Color = 'primary' | 'gray';

const DEFAULT_COLOR: Color = 'primary';
const COLOR_STYLE_MAP: Record<Color, string> = {
  primary: styles.primary,
  gray: styles.gray
};

export const resolveColorStyle = (color?: Color): string => {
  return COLOR_STYLE_MAP[color ?? DEFAULT_COLOR];
};
