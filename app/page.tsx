"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>{JSON.stringify(session)}</p>
      <Button
        onClick={async () => {
          await signOut();
          return redirect("/");
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
