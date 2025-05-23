"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/assignment/ui/InputField";
import TextareaField from "@/components/assignment/ui/TextareaField";
import SelectField from "@/components/assignment/ui/SelectField";
import SubmitButton from "@/components/assignment/ui/SubmitButton";
import {
  CreateAssignmentFormType,
  createAssignmentSchema,
} from "@/utils/schemas/create-assignment.schema";
import { submitAssignment } from "@/utils/actions/create-assignment.action";
import { useRouter } from "next/navigation";
import { ROUTE } from '@/utils/routes';

interface AssignmentFormProps {
  levels: string[];
}

export default function AssignmentForm({ levels }: AssignmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
  } = useForm<CreateAssignmentFormType>({
    resolver: zodResolver(createAssignmentSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: CreateAssignmentFormType) => {
    const result = await submitAssignment(data);
    if (!result?.success) {
      console.log(result);
      if (result.apiError && typeof result.apiError === "object") {
        Object.entries(result.apiError).forEach(([field, messages]) => {
          if (messages && messages.length > 0) {
            setError(field as keyof CreateAssignmentFormType, {
              message: messages[0],
            });
          }
        });
      }
    } else {
      localStorage.setItem(
        "thankYouData",
        JSON.stringify({ message: result.message, data: result.data })
      );
      router.push(`${ROUTE.THANK_YOU}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mt-10 w-[380px] flex flex-col items-center"
    >
      <InputField
        label="Name"
        {...register("name")}
        error={errors.name?.message}
      />
      <InputField
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <TextareaField
        label="Assignment Description"
        {...register("assignment_description")}
        error={errors.assignment_description?.message}
      />
      <InputField
        label="GitHub Repository URL"
        {...register("github_repo_url")}
        error={errors.github_repo_url?.message}
      />
      <SelectField
        label="Candidate Level"
        options={levels}
        onChange={(val) => {
          setValue("candidate_level", val, { shouldValidate: true });
          clearErrors("candidate_level");
        }}
        error={errors.candidate_level?.message}
      />
      <SubmitButton />
    </form>
  );
}
