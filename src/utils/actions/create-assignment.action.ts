"use server";

import { API_BASE_URL } from "@/lib/constants";
import { mapErrorsToFields } from "@/utils/functions/mapErrorsToFields";
import {
  CreateAssignmentFormType,
  createAssignmentSchema,
} from "@/utils/schemas/create-assignment.schema";

export async function submitAssignment(formData: CreateAssignmentFormType) {
  const validated = createAssignmentSchema.safeParse(formData);

  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  const res = await fetch(
    `${API_BASE_URL}/assignments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  const resData = await res.json();

  if (!res.ok) {
    const errors = mapErrorsToFields(resData.errors || []);
    return { success: false, apiError: errors };
  }

  return { success: true, message: resData.message, data: resData.data };
}
