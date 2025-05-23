import { CreateAssignmentFormType } from "@/utils/schemas/create-assignment.schema";

export function mapErrorsToFields(
  errorsFromServer: string[]
): Record<keyof CreateAssignmentFormType, string[]> {
  const fieldErrors: Record<keyof CreateAssignmentFormType, string[]> = {
    name: [],
    email: [],
    assignment_description: [],
    github_repo_url: [],
    candidate_level: [],
  };

  errorsFromServer.forEach((errorMsg) => {
    const firstWord = errorMsg.split(" ")[0].toLowerCase();

    const matchedKey = (
      Object.keys(fieldErrors) as (keyof CreateAssignmentFormType)[]
    ).find((key) => key.toLowerCase().includes(firstWord));

    if (matchedKey) {
      fieldErrors[matchedKey].push(errorMsg);
    } else {
    }
  });

  return fieldErrors;
}