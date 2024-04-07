import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <div>
      Coffee Store: {id}
      <div className="mb-2 mt-24 text-lg font-bold">
        <Link href="/" passHref>
          <a
            className={buttonVariants({ variant: "default", size: "default" })}
          >
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
