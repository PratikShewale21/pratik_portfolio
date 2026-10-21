import React from 'react';

/**
 * HudButton: Futuristic sci-fi button/anchor component.
 * - Outlined cyan border with hover state glow and slight elevation.
 * - Supports primary or outline variants.
 * - Supports Lucide icons or custom SVGs.
 */
export default function HudButton({
  children,
  href,
  onClick,
  icon: Icon,
  variant = 'outline',
  className = '',
  target,
  rel,
  type = 'button',
  ...props
}) {
  const isPrimary = variant === 'primary';
  const baseClasses = `
    inline-flex items-center justify-center gap-2 px-5 py-2.5
    font-rajdhani font-semibold text-sm tracking-wider uppercase
    rounded-[4px] cursor-pointer transition-all duration-200 select-none
    ${
      isPrimary
        ? 'bg-[#00e5ff]/20 text-white border border-[#00e5ff] shadow-[0_0_14px_rgba(0,229,255,0.4)] hover:bg-[#00e5ff]/30 hover:shadow-[0_0_22px_rgba(0,229,255,0.6)]'
        : 'bg-[#00e5ff]/[0.06] text-[#00e5ff] border border-[#00e5ff]/35 hover:border-[#00e5ff] hover:bg-[#00e5ff]/[0.18] hover:text-white hover:shadow-[0_0_16px_rgba(0,229,255,0.4)]'
    }
    hover:-translate-y-0.5 active:translate-y-0
    ${className}
  `.trim();

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    return (
      <a
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={baseClasses}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 text-inherit shrink-0" aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} {...props}>
      {Icon && <Icon className="w-4 h-4 text-inherit shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
