import Link from "next/link";
import Image from "next/image";
import { Mark } from "@/components/primitives/mark";
import type { TeamMember } from "@/content/team";

/**
 * Team card. The monogram is the standard treatment, not a placeholder: a
 * stock portrait of a stranger standing in for a named colleague is a lie,
 * `04 §8`. A real supplied photograph renders through `avatar` when the firm
 * has one.
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
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-stamp-600/25 bg-stamp-wash/70 font-mono text-[0.9375rem] font-medium tracking-[0.08em] text-stamp-700 shadow-xs transition-all duration-300 group-hover:border-stamp-600/50 group-hover:bg-stamp-wash">
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

        {/*
          Nothing is asserted that has not been supplied. A card with a name but
          no credentials simply carries none, rather than announcing a gap the
          reader cannot act on.
        */}
        {member.credentials ? (
          <p className="t-index mt-2 text-ink-500 font-light leading-relaxed">
            {member.credentials}
          </p>
        ) : (
          !member.name && (
            <p className="t-index mt-2 text-ink-400 font-light">
              Name and credentials pending
            </p>
          )
        )}

        {member.email && (
          <Link
            href={`mailto:${member.email}`}
            className="t-data mt-4 inline-flex items-center gap-2 text-[0.8125rem] text-stamp-700 no-underline hover:text-stamp-600 group/link"
          >
            <Mark name="email" size={15} />
            <span>{member.email}</span>
          </Link>
        )}

        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="t-body-sm mt-4 inline-flex items-center gap-1.5 text-stamp-700 no-underline font-medium hover:text-stamp-600 group/link"
          >
            <Mark name="linkedin" size={15} />
            <span>LinkedIn</span>
            <span aria-hidden className="transition-transform duration-200 group-hover/link:translate-x-0.5">&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  );
}
