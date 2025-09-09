import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { styles } from '../app/(app)/styles';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.themedDefault : undefined,
        type === 'title' ? styles.themedTitle : undefined,
        type === 'defaultSemiBold' ? styles.themedDefaultSemiBold : undefined,
        type === 'subtitle' ? styles.themedSubtitle : undefined,
        type === 'link' ? styles.themedLink : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

