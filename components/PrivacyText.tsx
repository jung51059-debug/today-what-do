import { SITE } from "@/content/site";

type PrivacyTextProps = {
  text: string;
};

/** 문단 안의 연락 이메일을 mailto 링크로 렌더링합니다. */
export default function PrivacyText({ text }: PrivacyTextProps) {
  const email = SITE.contactEmail;
  const index = text.indexOf(email);

  if (index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <a href={`mailto:${email}`}>{email}</a>
      {text.slice(index + email.length)}
    </>
  );
}
