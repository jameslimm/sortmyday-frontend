import { Button, Form } from "react-aria-components";

import FormTextField from "./FormTextField";

const LoginForm = ({ handleSubmit, isLoading, errors }) => {
  const submitButtonClass = `mt-6 bg-orange-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50 ${
    isLoading && "animate-pulse cursor-wait"
  }`;
  const formClass = `${isLoading && "animate-pulse cursor-wait"}`;

  return (
    <div className="px-4">
      <h2 className="text-2xl text-slate-700 font-bold">LOG IN</h2>
      <Form className={formClass} validationErrors={errors} onSubmit={handleSubmit}>
        <FormTextField name="username" label="Username" />
        <FormTextField name="password" label="Password" type="password" />

        <Button type="submit" className={submitButtonClass} isDisabled={isLoading}>
          Log In
        </Button>
      </Form>

      <div className="p-4 bg-red-200 mt-8">
        Important Note - this site is for demonstration purposes only, and is subject to change and
        removal at any time.
      </div>
    </div>
  );
};

export default LoginForm;
