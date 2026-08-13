import Link from "next/link";
import Image from "next/image";
import type { TeamMember } from "@/content/team";

/**
 * Team card with demo portrait avatar, role, and credentials.
 */
export function TeamCard({ member }: { readonly member: TeamMember }) {
  return (
    <div
      data-slot="team-card"
      className="group relative flex min-h-[280px] flex-col justify-between rounded-[22px] border border-rule/80 bg-paper-raised p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-rule-strong hover:shadow-card"
    >
      {/* Avatar portrait or initials fallback */}
      {member.avatar ? (
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-rule bg-paper-sunk shadow-xs transition-transform duration-300 group-hover:scale-105">
          <Image
            src={member.avatar}
            alt={member.name || member.role}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-rule bg-paper-sunk font-mono text-[0.875rem] font-medium tracking-wider text-stamp-700 transition-all duration-300 group-hover:border-stamp-600/30 group-hover:bg-stamp-wash/40">
          {member.initials}
        </div>
      )}

      <div className="mt-6">
        {member.name ? (
          <>
            <p className="m-0 font-display text-[1.125rem] font-medium text-ink-900 leading-snug">
              {member.name}
            </p>
            <p className="t-body-sm mt-1 text-stamp-700 font-medium">{member.role}</p>
          </>
        ) : (
          <h3 className="m-0 font-display text-[1.125rem] font-medium text-ink-900 leading-snug">
            {member.role}
          </h3>
        )}

        {member.credentials ? (
          <p className="t-index mt-2 text-ink-500 font-light leading-relaxed">
            {member.credentials}
          </p>
        ) : (
          <p className="t-index mt-2 text-ink-400 font-light">
            Name and credentials pending
          </p>
        )}

        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="t-body-sm mt-4 inline-flex items-center gap-1.5 text-stamp-700 no-underline font-medium hover:text-stamp-600 group/link"
          >
            <span>LinkedIn</span>
            <span aria-hidden className="transition-transform duration-200 group-hover/link:translate-x-0.5">&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  );
}
