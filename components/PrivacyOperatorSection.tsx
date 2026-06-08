import {
  CONTACT_EMAIL,
  OPERATOR_ADDRESS,
  OPERATOR_NAME,
  OPERATOR_REPRESENTATIVE,
} from "@/content/site";

export default function PrivacyOperatorSection() {
  return (
    <>
      <h2 className="privacy-section-title mb-3 font-bold text-ink">
        2. 운영자 정보
      </h2>
      <dl className="privacy-operator-card">
        <div className="privacy-operator-row">
          <dt>회사명/운영자명</dt>
          <dd>{OPERATOR_NAME}</dd>
        </div>
        <div className="privacy-operator-row">
          <dt>대표자</dt>
          <dd>{OPERATOR_REPRESENTATIVE}</dd>
        </div>
        <div className="privacy-operator-row">
          <dt>주소</dt>
          <dd>{OPERATOR_ADDRESS}</dd>
        </div>
        <div className="privacy-operator-row">
          <dt>이메일</dt>
          <dd>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-mint transition-colors hover:text-mint-hover"
            >
              {CONTACT_EMAIL}
            </a>
          </dd>
        </div>
      </dl>
    </>
  );
}
