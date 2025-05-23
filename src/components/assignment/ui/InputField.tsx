import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function InputField({
  label,
  error,
  ...props
}: InputFieldProps) {
  return (
    <div
      className={`flex flex-col w-full ${error ? "mb-0" : "mb-[25px]"}`}
    >
      <Label className="mb-[5px] text-base">{label}</Label>
      <Input {...props} className={`${error ? "border-red-500 focus-visible:border-red-500" : ""}`} />
      {error && <p className="text-red-500 text-sm mb-[5px]">{error}</p>}
    </div>
  );
}
