import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function TextareaField({
  label,
  error,
  ...props
}: TextareaFieldProps) {
  return (
    <div className={`flex flex-col w-full ${error ? "mb-0" : "mb-[25px]"}`}>
      <Label className="mb-[5px] text-base">{label}</Label>
      <Textarea {...props} className={` ${error ? "border-red-500 focus-visible:border-red-500" : ""}`} />
      {error && <p className="text-red-500 text-sm mb-[5px]">{error}</p>}
    </div>
  );
}
