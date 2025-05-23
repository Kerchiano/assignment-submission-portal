import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SelectFieldProps {
  label: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
}

export default function SelectField({
  label,
  options,
  error,
  onChange,
}: SelectFieldProps) {
  return (
    <div className={`flex flex-col w-full ${error ? "mb-0" : "mb-[25px]"}`}>
      <Label className="mb-[5px] text-base">{label}</Label>
      <Select onValueChange={onChange}>
        <SelectTrigger className={error ? "border-red-500 focus-visible:border-red-500" : ""}>
          <SelectValue placeholder="Select a level" />
        </SelectTrigger>
        <SelectContent>
          {options.map((level) => (
            <SelectItem key={level} value={level}>
              {level}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm mb-[5px]">{error}</p>}
    </div>
  );
}
