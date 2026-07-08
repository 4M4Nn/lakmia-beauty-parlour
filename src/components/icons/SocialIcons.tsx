type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 9h2.5V6h-2.5c-1.93 0-3.5 1.57-3.5 3.5V11H8v3h2.5v6h3v-6H16l0.5-3h-3V9.5c0-0.28 0.22-0.5 0.5-0.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.75 13.55L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.7 8.4c-.3.6-.6 1.5.1 2.9.9 1.9 2.5 3.5 4.4 4.3 1.3.5 2.1.3 2.7 0 .5-.3.9-1 1-1.4l-1.9-1c-.2.3-.6.9-.9 1-.3.1-.7 0-1.4-.4-.9-.5-1.6-1.2-2.1-2.1-.3-.5-.1-.8.1-1l.5-.6-.9-1.9-.6.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YouTubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.7v4.6l4-2.3-4-2.3Z" fill="currentColor" />
    </svg>
  );
}
