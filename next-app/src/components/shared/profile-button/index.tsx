"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileButton() {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <Button>
          <Link href="/auth/signin">Sign in </Link>
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={
                session.user?.image ??
                "https://l0ukjseikguogzxj.public.blob.vercel-storage.com/noAvatarImg-29nfO6x9QE7Uey2nRN4WdMm3QI9fqL.jpg"
              }
              alt={session.user?.name ?? "user"}
            />
            <AvatarFallback>
              {session.user?.name?.[0]?.toUpperCase() ?? "user"}
            </AvatarFallback>
          </Avatar>
          <Button variant="destructive" onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
      )}
    </>
  );
}