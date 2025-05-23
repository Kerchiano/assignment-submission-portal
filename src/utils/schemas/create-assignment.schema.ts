import { z } from "zod";

export const createAssignmentSchema = z.object({
  name: z.string().nonempty("Name is required").regex(/^[^\d]*$/, "Name must not contain numbers"),
  email: z.string().email("Email must be valid"),
  assignment_description: z.string().nonempty("Description is required"),
  github_repo_url: z.string().url("Must be a valid URL"),
  candidate_level: z.string().nonempty("Candidate level is required"),
});

export type CreateAssignmentFormType = z.infer<typeof createAssignmentSchema>;
