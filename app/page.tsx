import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-blue-500 text-3xl">Mister</h1>
      <Button>Click me</Button>
    </main>
  );
}
