import { useOSColorScheme } from 'expo-system-ui';
import { Foundation } from '@expo/vector-icons';

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: React.ComponentProps<typeof Foundation>['name'];
  size?: number;
  color?: string;
  style?: any;
}) {
  return (
    <Foundation
      name={name}
      size={size}
      color={color || '#000'}
      style={style}
    />
  );
}
