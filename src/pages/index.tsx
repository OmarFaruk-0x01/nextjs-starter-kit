import { Header } from '@mantine/core';
import HomePageHeader from '~/components/headers/HomePageHeader';
import useBreakpoints from '~/hooks/use-breakpoints';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const isMd = useBreakpoints('md');
  return (
    <div>
      <Header bg={'cyan'} tw="h-[100px]" height={isMd ? 80 : '100%'}>
        <HomePageHeader />
      </Header>
    </div>
  );
};

export default Home;
