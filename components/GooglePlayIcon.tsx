type GooglePlayIconProps = {
  className?: string;
};

/** Google Play 공식 4색 삼각 로고 */
export default function GooglePlayIcon({
  className = "h-6 w-6 shrink-0",
}: GooglePlayIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"
        fill="#4285F4"
      />
      <path
        d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"
        fill="#34A853"
      />
      <path
        d="M3.84,2.15C4.12,1.98 4.45,1.88 4.8,1.88C5.17,1.88 5.52,1.99 5.8,2.18L16.81,8.88L14.54,11.15L3.84,2.15Z"
        fill="#FBBC04"
      />
      <path
        d="M16.81,8.88L21.61,11.67C22.13,11.97 22.13,12.63 21.61,12.93L16.81,15.72L14.54,12.85L16.81,8.88Z"
        fill="#EA4335"
      />
    </svg>
  );
}
