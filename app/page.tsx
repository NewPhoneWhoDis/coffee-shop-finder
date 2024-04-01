import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 
      bg-accent-interactive"
    >
      <h1 className="text-3xl font-plex italic">Test</h1>
      <h2 className="text-3xl font-plex bold">font</h2>
      <Button>Click me</Button>
    </main>
  );
}
