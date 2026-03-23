import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField = ({
  name,
  label,
  placeholder,
  register,
  error,
  validation,
  type = "text",
  disabled,
  value,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">{label}</Label>
      <Input 
        type={type}
        placeholder={placeholder}
        id={name}
        disabled={disabled}
        className={cn('form-input', {'opacity-50 cursor-not-allowed': disabled})}
        {...register(name, validation)}
      />
      {error && <p className="text-sm text-red-400">{error.message}</p>}
    </div>
  );
};

export default InputField;
