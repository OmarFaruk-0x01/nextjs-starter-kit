import { NavLink } from '@mantine/core';
import { signOut } from 'next-auth/react';
import {
  AiFillDashboard,
  AiOutlineLogout,
  AiOutlineRight,
} from 'react-icons/ai';
export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = ({}) => {
  return (
    <div className="w-[250px] h-screen p-5 ">
      <div className="pb-10">
        <img
          className="mx-auto h-10 w-full"
          src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=800"
          alt="Your Company"
        />
      </div>
      <div>
        <NavLink
          label="Dashboard"
          icon={<AiFillDashboard size="1rem" stroke="1.5" />}
          rightSection={<AiOutlineRight size="0.8rem" stroke="1.5" />}
          active
        />
        <NavLink
          label="LogOut"
          icon={<AiOutlineLogout size="1rem" stroke="1.5" />}
          rightSection={<AiOutlineRight size="0.8rem" stroke="1.5" />}
          variant="filled"
          onClick={() => {
            signOut({ callbackUrl: '/' });
          }}
          active
        />
      </div>
    </div>
  );
};

export default SidebarLayout;
