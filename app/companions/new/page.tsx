import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companions.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="items-center justify-center flex flex-col gap-4 w-full min-2xl:w-1/2 pt-20 text-center">
          <Image
            src="/images/limit.svg"
            alt="Campanion limit reached"
            width={360}
            height={230}
          />
          <div className="bg-cta-gold rounded-4xl px-3 py-1.5 text-black">
            Upgrade your plan
          </div>
          <h1>You&apos;ve Reached Your Limit</h1>
          <p>
            You&apos;ve reached your companion limit. Upgrade to created more
            companions and premium features
          </p>
          <Link
            href="/subscription"
            className="bg-primary text-white rounded-xl cursor-pointer px-4 py-2 flex items-center gap-2 w-full justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
