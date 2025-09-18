import CompanionCard from "@/components/CompanionCard";
import SessionsList from "@/components/SessionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessions = await getRecentSessions(10);

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="flex gap-4 justify-start items-start w-full max-lg:flex-col-reverse max-lg:items-center">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center">
        <SessionsList
          classNames="w-2/3 max-lg:w-full"
          title="Recently completed sessions"
          sessions={recentSessions}
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
