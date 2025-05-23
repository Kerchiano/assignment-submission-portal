import AssignmentForm from "@/components/assignment/create/AssignmentForm";
import { fetchLevels } from "@/lib/api";

export default async function Home() {
  const levels = await fetchLevels();
  return (
    <main className="p-4 flex flex-col w-full items-center min-h-screen justify-center">
      <h1 className="text-2xl font-bold">Assignment Submission</h1>
      <AssignmentForm levels={levels} />
    </main>
  );
}
