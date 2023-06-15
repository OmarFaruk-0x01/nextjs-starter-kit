import { Anchor, Button, Group, TextInput } from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signInSchema } from '~/helpers/schema-validators';

const LoginPage = () => {
  const router = useRouter();
  const form = useForm({
    validate: joiResolver(signInSchema),
    initialValues: {
      password: '',
      email: '',
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        signIn('credentials', {
          ...values,
          callbackUrl: (router?.query?.callback as string) ?? '/console',
        });
      })}
    >
      <TextInput
        withAsterisk
        label="Email"
        placeholder="example@mail.com"
        {...form.getInputProps('email')}
      />
      <TextInput
        withAsterisk
        label="Password"
        type="password"
        placeholder="*******"
        mt="sm"
        {...form.getInputProps('password')}
      />

      <Group position="right" mt="xl">
        <Button type="submit">Submit</Button>
      </Group>

      <p className="mt-10 text-center text-sm text-gray-500">
        Don{'&apos'}t have any account?{`&apos`}
        <Anchor component={Link} href={'/auth/register'}>
          Register Now!
        </Anchor>
      </p>
    </form>
  );
};

export default LoginPage;
