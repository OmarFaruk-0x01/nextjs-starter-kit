import classes from './Logo.module.css';
import { Avatar } from '@mantine/core';

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Avatar
        src="https://images.unsplash.com/photo-1608214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
        radius="xl"
      />
    </div>
  );
}
