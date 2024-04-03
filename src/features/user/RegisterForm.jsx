import { Button, Form } from "react-aria-components";
import { Link } from "react-router-dom";

import FormTextField from "./FormTextField";

const RegisterForm = ({ handleSubmit, isLoading, errors }) => {
  // Define tailwind classes for form elements
  const submitButtonClass = `bg-orange-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50 ${
    isLoading && "animate-pulse cursor-wait"
  }`;
  const formClass = `${isLoading && "animate-pulse cursor-wait"}`;

  return (
    <div className="px-4">
      <h2 className="text-2xl text-slate-700 font-bold">CREATE YOUR ACCOUNT</h2>
      <p className="py-2">Join SortMyDay and start getting organised today.</p>
      <p className="py-2 font-medium">Free to join and easy to use.</p>
      <Form className={formClass} validationErrors={errors} onSubmit={handleSubmit}>
        <FormTextField name="username" label="Username" isDisabled={isLoading} />
        <FormTextField name="password" label="Password" type="password" isDisabled={isLoading} />
        <FormTextField
          name="passwordConfirm"
          label="Repeat Password"
          type="password"
          isDisabled={isLoading}
        />

        <div className="flex items-center gap-6 mt-6">
          <Button type="submit" className={submitButtonClass} isDisabled={isLoading}>
            Create Account
          </Button>

          <Link to="/login" className="underline">
            I already have an account
          </Link>
        </div>
      </Form>
      <div className="p-4 bg-red-200 mt-8">
        Important Note - this site is for demonstration purposes only, and is subject to change and
        removal at any time.
      </div>
    </div>
  );
};

export default RegisterForm;
