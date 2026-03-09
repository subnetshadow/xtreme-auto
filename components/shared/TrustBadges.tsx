const badges = [
  {
    label: 'Mobile & Studio Detailing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: '5-Star Rated in Calgary',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: 'Ceramic Coatings & Paint Protection',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Paint Correction Specialists',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    label: 'Fully Insured & Professional',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

interface TrustBadgesProps {
  className?: string
  variant?: 'row' | 'wrap'
}

export default function TrustBadges({ className = '', variant = 'row' }: TrustBadgesProps) {
  return (
    <div
      className={`flex ${
        variant === 'wrap'
          ? 'flex-wrap justify-center gap-3'
          : 'flex-wrap justify-center md:justify-start gap-4'
      } ${className}`}
    >
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-3 py-2"
        >
          <span className="text-xad-gold shrink-0">{badge.icon}</span>
          <span className="text-white/70 text-xs font-medium whitespace-nowrap">{badge.label}</span>
        </div>
      ))}
    </div>
  )
}
