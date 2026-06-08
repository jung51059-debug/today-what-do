type AppIconProps = {
  size?: number;
  className?: string;
};

/**
 * app_icon2.png — Next/Image 래퍼 없이 고정 px로 표시
 * (줌·레이아웃 시 빈 박스·아래 치우침 방지)
 */
export default function AppIcon({ size = 88, className = "" }: AppIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/app-icon.png"
      alt="오늘 뭐 하지? 앱 아이콘"
      width={size}
      height={size}
      decoding="async"
      className={`block shrink-0 grow-0 ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
      }}
    />
  );
}
