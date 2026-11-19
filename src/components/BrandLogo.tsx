import { useId } from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({ variant = 'light', size = 'md' }: BrandLogoProps) {
  const uid = useId().replace(/:/g, '');
  const plateGradId = `steel-plate-${uid}`;
  const beamGradId = `laser-beam-${uid}`;

  const iconSize =
    size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10 sm:h-11 sm:w-11';
  const titleSize =
    size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl sm:text-[22px]';
  const isDarkBg = variant === 'dark';

  return (
    <div className="inline-flex items-center gap-3 select-none">
      {/* Custom CNC-Cut Steel Fixture Plate + Laser Kerf Emblem */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSize} shrink-0 drop-shadow-xs transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={plateGradId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id={beamGradId} x1="20" y1="38" x2="39" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="70%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>

        {/* Heavy Chamfered Steel Plate */}
        <path
          d="M11 4H37L44 11V37L37 44H11L4 37V11L11 4Z"
          fill={`url(#${plateGradId})`}
          stroke={isDarkBg ? '#52525b' : '#27272a'}
          strokeWidth="1.5"
        />
        <path
          d="M12.5 7.5H35.5L40.5 12.5V35.5L35.5 40.5H12.5L7.5 35.5V12.5L12.5 7.5Z"
          stroke="#3f3f46"
          strokeWidth="0.9"
          strokeDasharray="2 2"
        />

        {/* Precision Weld Table Fixture Grid Holes */}
        <circle cx="15.5" cy="16.5" r="2.25" fill="#f4f4f5" />
        <circle cx="24" cy="16.5" r="2.25" fill="#f4f4f5" />
        <circle cx="15.5" cy="25" r="2.25" fill="#f4f4f5" />
        <circle cx="15.5" cy="33.5" r="2.25" fill="#a1a1aa" />

        {/* CNC Laser Kerf Beam + Hot Spark */}
        <path
          d="M21 37L38 11"
          stroke={`url(#${beamGradId})`}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="11" r="2.4" fill="#fde68a" />
      </svg>

      {/* Architectural Industrial Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-bold tracking-tight uppercase ${titleSize} ${
              isDarkBg ? 'text-white' : 'text-base-950'
            }`}
          >
            IRON<span className="text-primary-600">GRID</span>
          </span>
          <span className="hidden rounded border border-primary-600/30 bg-primary-600/10 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary-600 sm:inline-block">
            CNC
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="h-[2px] w-3 rounded-full bg-primary-600" />
          <span
            className={`font-mono text-[9px] font-semibold uppercase tracking-[0.22em] ${
              isDarkBg ? 'text-base-400' : 'text-base-500'
            }`}
          >
            METALWORKS &amp; FAB
          </span>
        </div>
      </div>
    </div>
  );
}
