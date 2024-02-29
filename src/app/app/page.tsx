import { auth } from "@/services/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex items-center justify-center h-screen">
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </main>
  );
}
