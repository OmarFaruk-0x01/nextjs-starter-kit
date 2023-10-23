import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import classes from './CommonLayout.module.css';
import { ReactNode } from 'react';
import UserButton from '~/components/core/UserButton';
import Logo from '~/components/core/Logo';

type CommonLayoutProps = {
  children: ReactNode;
};

function CommonLayout({ children }: CommonLayoutProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header h={80}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Logo />
            <UserButton />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
export default CommonLayout;
