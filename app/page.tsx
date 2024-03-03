import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 
      bg-accent-interactive"
    >
      <h1 className="text-3xl">Mister</h1>
      <Button>Click me</Button>
    </main>
  );
}
