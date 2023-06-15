import { Anchor, Button, Group, TextInput } from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import Link from 'next/link';
import type { FC } from 'react';
import { registerSchema } from '~/helpers/schema-validators';

interface RegisterPageProps {}
const RegisterPage: FC<RegisterPageProps> = () => {
  const form = useForm({
    validate: joiResolver(registerSchema),
    initialValues: {
      password: '',
      confirm_password: '',
      email: '',
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
      <TextInput
        withAsterisk
        label="Confirm Password"
        type="password"
        placeholder="*******"
        mt="sm"
        {...form.getInputProps('confirm_password')}
      />

      <Group position="right" mt="xl">
        <Button type="submit">Submit</Button>
      </Group>
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have a account?{' '}
        <Anchor component={Link} href={'/auth/login'}>
          Signin Now!
        </Anchor>
      </p>
    </form>
  );
};

export default RegisterPage;
