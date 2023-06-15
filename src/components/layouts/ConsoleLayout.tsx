import { ReactNode } from 'react';
import SidebarLayout from './SidebarLayout';

export interface IConsoleLayout {
  children: ReactNode;
}

const ConsoleLayout: React.FC<IConsoleLayout> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] bg-background">
      <SidebarLayout />
      <div className="">{children}</div>
    </div>
  );
};

export default ConsoleLayout;
