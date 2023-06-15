import { useMantineTheme, type MantineSize } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useBreakpoints = (bp: MantineSize) => {
  const { breakpoints } = useMantineTheme();
  return useMediaQuery(`(max-width: ${breakpoints[bp]})`);
};

export default useBreakpoints;
