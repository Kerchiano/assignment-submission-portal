import AssignmentForm from "@/components/assignment/create/AssignmentForm";
import { fetchLevels } from "@/lib/api";

export default async function Home() {
  const levels = await fetchLevels();
  return (
    <main className="p-4 flex flex-col w-full items-center min-h-[100vh] justify-center min-w-[400px]">
      <h1 className="text-2xl font-bold">Assignment Submission</h1>
      <AssignmentForm levels={levels} />
    </main>
  );
}
