import Link from "next/link";

export default function HomePage() {
  return (
    <div className="prose flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold">Welcome to Sleepless</h1>
      <p className="text-fd-muted-foreground">
        Official documentation for resources developed by the Sleepless team.
      </p>
      <Link href="/docs">Continue to Documentation →</Link>
    </div>
  );
}
