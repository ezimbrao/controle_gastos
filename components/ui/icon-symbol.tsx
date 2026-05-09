import { MaterialIcons } from '@expo/vector-icons';

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  size?: number;
  color?: string;
  style?: any;
}) {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={color || '#000'}
      style={style}
    />
  );
}
