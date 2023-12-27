import type {
  FlexStyles,
  GridItemStyles,
  GridStyles,
} from '@styles/sprinkles.css';

export const seperateProps = <
  T extends FlexStyles | GridStyles | GridItemStyles,
>(
  styleDefinitions,
  props,
  stylesProps = {},
) => {
  const styleProps = stylesProps;
  const nativeProps: Record<string, unknown> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (styleDefinitions.properties.has(key as keyof T)) {
      styleProps[key] = value;
    } else {
      nativeProps[key] = value;
    }
  });

  return {
    styleProps,
    nativeProps,
  };
};
