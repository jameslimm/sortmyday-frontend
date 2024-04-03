import { FieldError, Input, Label, TextField } from "react-aria-components";

const FormTextField = ({ name, label, ...props }) => {
  // Define tailwind classes for form elements
  const inputClass = `shadow-sm rounded-md px-2 py-1 w-full lg:w-2/3 xl:w-1/2 font-semibold text-m border-solid border-2 border-slate-300
  outline-none focus:ring-2 ring-orange-400 ring-offset-2 text-slate-500 placeholder-slate-500 
  data-[invalid=true]:text-red-600 data-[invalid=true]:border-red-600`;

  const labelClass = `block text-slate-600 my-2 after:content-['_*'] after:text-red-500`;
  const fieldErrorClass = `block text-red-600`;

  return (
    <TextField name={name} {...props}>
      <Label className={labelClass}>{label}</Label>
      <Input className={inputClass} />
      <FieldError className={fieldErrorClass} />
    </TextField>
  );
};

export default FormTextField;
