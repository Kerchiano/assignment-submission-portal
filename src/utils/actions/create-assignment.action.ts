"use server";

import {
  CreateAssignmentFormType,
  createAssignmentSchema,
} from "@/utils/schemas/create-assignment.schema";

export async function submitAssignment(formData: CreateAssignmentFormType) {
  const validated = createAssignmentSchema.safeParse(formData);

  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  const res = await fetch(`${process.env.API_BASE_URL}/assignments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const resData = await res.json();
  if (!res.ok) {
    return { success: false, apiError: resData.errors };
  }

  return { success: true, message: resData.message, data: resData.data };
}
