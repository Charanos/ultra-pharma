import Link from "next/link";
import type { TeamMember } from "@/content/team";

/**
 * Typographic treatment per `04 §8`. When the firm supplies a name and
 * credentials the card renders them in place of the pending line. Stock
 * portraits are never substituted for real people.
 */
export function TeamCard({ member }: { readonly member: TeamMember }) {
  return (
    <div
      data-slot="team-card"
      className="panel flex min-h-[260px] flex-col gap-5 px-7 py-8"
    >
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-rule-strong font-mono text-[1.0625rem] text-ink-500">
        {member.initials}
      </div>
      <div className="mt-auto">
        {member.name ? (
          <>
            <p className="m-0 text-[1.0625rem] font-medium">{member.name}</p>
            <p className="t-body-sm mt-1 text-ink-500">{member.role}</p>
          </>
        ) : (
          <p className="m-0 text-[1.0625rem] font-medium">{member.role}</p>
        )}

        {member.credentials ? (
          <p className="t-index mt-2 text-ink-400">{member.credentials}</p>
        ) : (
          <p className="t-index mt-2 text-ink-400">Name and credentials pending</p>
        )}

        {member.linkedin && (
          <Link href={member.linkedin} className="t-body-sm mt-3 inline-block">
            LinkedIn
          </Link>
        )}
      </div>
    </div>
  );
}
