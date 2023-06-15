import { Anchor, Button, clsx } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import useAuth from '~/hooks/use-auth';
import useBreakpoints from '~/hooks/use-breakpoints';

const HomePageHeader = () => {
  const { session } = useAuth();
  const [open, setOpen] = useState(false);
  const isXS = useBreakpoints('xs');

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">Example</span>
      </div>
      <div className="block lg:hidden">
        <Button
          sx={() => ({ backgroundColor: 'white' })}
          className="text-black"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
      </div>

      <div
        className={clsx('w-full flex-grow lg:flex lg:items-center lg:w-auto', {
          hidden: isXS,
          block: !isXS,
        })}
      >
        <div className="text-sm lg:flex-grow">
          <Anchor
            component={Link}
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </Anchor>
        </div>
        <div>
          {!session ? (
            <Anchor
              component={Link}
              className="inline-block text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent font-bold  hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 w-full text-center"
              href={'/auth/login'}
            >
              Sign in
            </Anchor>
          ) : (
            <Anchor
              component={Link}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              href={'/console'}
            >
              Go to Console
            </Anchor>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HomePageHeader;
