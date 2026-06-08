import { SITE } from "./site";

export type PrivacyDetailItem = {
  title: string;
  description: string;
};

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  paragraphsAfter?: readonly string[];
  detailItems?: readonly PrivacyDetailItem[];
};

/** 개인정보처리방침 시행일 — 업데이트 시 함께 수정하세요 */
export const PRIVACY_META = {
  effectiveDate: "2026년 6월 8일",
} as const;

export const PRIVACY_INTRO = [
  "「오늘 뭐 하지?」은 별도의 회원가입이나 로그인 없이 이용할 수 있는 모바일 앱입니다. 앱은 메뉴 추천, 근처 맛집 검색, 즐겨찾기 등의 기능을 제공하며, 서비스 제공에 필요한 범위 내에서 개인정보를 처리할 수 있습니다.",
  "운영자는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 안전하게 보호하기 위해 노력합니다.",
] as const;

export const PRIVACY_SECTIONS = [
  {
    id: "intro",
    title: "1. 총칙",
    paragraphs: PRIVACY_INTRO,
  },
  {
    id: "operator",
    title: "2. 운영자 정보",
  },
  {
    id: "collected",
    title: "3. 수집하는 개인정보 항목",
    paragraphs: [
      "앱은 회원가입을 요구하지 않으며, 이용자를 식별할 수 있는 계정 정보를 서버에 저장하지 않습니다. 다만 서비스 제공을 위해 아래와 같은 정보가 처리될 수 있습니다.",
    ],
    detailItems: [
      {
        title: "위치 정보(선택)",
        description:
          "근처 맛집 검색 기능 이용 시, 이용자가 위치 권한을 허용한 경우에만 사용됩니다.",
      },
      {
        title: "기기 내 저장 정보",
        description:
          "즐겨찾기, 최근 메뉴 기록, 검색 필터 설정 등의 정보가 이용자 기기 내에 저장될 수 있습니다.",
      },
      {
        title: "광고 식별자",
        description:
          "Google AdMob 광고 제공 과정에서 광고 식별자(Advertising ID) 및 기기 정보 등이 수집·이용될 수 있습니다.",
      },
      {
        title: "앱 이용 기록(비식별 정보)",
        description:
          "서비스 개선 및 오류 분석을 위한 비식별 형태의 기술적 정보가 수집될 수 있습니다.",
      },
    ],
  },
  {
    id: "purpose",
    title: "4. 개인정보의 처리 목적",
    paragraphs: [
      "앱은 다음과 같은 목적으로 개인정보를 처리할 수 있습니다.",
    ],
    list: [
      "상황별 메뉴 추천 및 앱 핵심 기능 제공",
      "이용자 위치 기반의 근처 맛집 검색 기능 제공(위치 권한 허용 시)",
      "즐겨찾기 및 최근 기록 저장 등 개인화된 이용 경험 제공",
      "광고 제공 및 광고 성과 측정(Google AdMob)",
      "지도, 전화, 앱 스토어 등 외부 서비스 연결 기능 제공",
    ],
  },
  {
    id: "device-storage",
    title: "5. 기기 내 저장 정보",
    paragraphs: [
      "앱은 아래와 같은 정보를 이용자 기기 내부에 저장할 수 있습니다. 해당 정보는 운영자의 서버로 전송되지 않으며, 일반적으로 앱 삭제 시 함께 삭제됩니다.",
    ],
    list: [
      "즐겨찾기한 메뉴 및 맛집 목록",
      "최근 확인한 메뉴 기록",
      "검색 거리, 카테고리 등 사용자 설정 정보",
    ],
    paragraphsAfter: [
      "이용자는 앱 내 기능을 통해 저장된 즐겨찾기 및 기록을 삭제할 수 있습니다.",
    ],
  },
  {
    id: "location",
    title: "6. 위치 정보",
    paragraphs: [
      "근처 장소 검색 기능은 이용자가 위치 권한을 허용한 경우에만 이용할 수 있습니다. 위치 권한을 허용하지 않을 경우 일부 기능 이용이 제한될 수 있습니다.",
      "이용자는 Android 또는 iOS 설정에서 언제든지 위치 권한을 변경하거나 철회할 수 있습니다.",
    ],
  },
  {
    id: "third-party",
    title: "7. 제3자 제공 및 외부 서비스 연동",
    paragraphs: [
      "앱은 아래 외부 서비스와 연동될 수 있으며, 각 서비스의 개인정보처리방침이 별도로 적용될 수 있습니다.",
    ],
    detailItems: [
      {
        title: "카카오 로컬 API",
        description:
          "근처 맛집 검색 기능 제공을 위해 검색어 및 위치 정보(좌표)가 카카오 서버로 전송될 수 있습니다.",
      },
      {
        title: "Google AdMob",
        description:
          "광고 제공 및 광고 성과 측정을 위해 광고 식별자, 기기 정보, 이용 기록 등이 Google에 의해 처리될 수 있습니다.",
      },
      {
        title: "외부 서비스 연결",
        description:
          "지도, 전화, 앱 스토어 등 외부 앱 또는 웹페이지로 이동할 경우 해당 서비스의 정책이 적용될 수 있습니다.",
      },
    ],
  },
  {
    id: "retention",
    title: "8. 보유 및 이용 기간",
    paragraphs: [
      "앱은 개인정보를 아래와 같은 기준으로 보유 및 이용합니다.",
    ],
    detailItems: [
      {
        title: "기기 내 저장 정보",
        description:
          "이용자가 직접 삭제하거나 앱을 삭제할 때까지 이용자 기기 내에 저장될 수 있습니다.",
      },
      {
        title: "위치 정보",
        description:
          "근처 맛집 검색 요청 처리에 필요한 최소한의 범위에서만 일시적으로 이용됩니다.",
      },
      {
        title: "제3자 서비스 정보",
        description:
          "카카오, Google 등 외부 서비스에서 처리되는 정보는 각 서비스 제공자의 정책에 따릅니다.",
      },
    ],
  },
  {
    id: "rights",
    title: "9. 이용자의 권리",
    paragraphs: [
      "이용자는 아래와 같은 방법으로 개인정보 관련 권리를 행사할 수 있습니다.",
    ],
    list: [
      "앱 내 기능을 통한 즐겨찾기 및 최근 기록 삭제",
      "Android 또는 iOS 설정에서 위치 권한 변경 및 철회",
      "앱 삭제를 통한 기기 내 저장 데이터 삭제",
      "Android/iOS 및 Google 광고 설정을 통한 맞춤형 광고 설정 변경",
    ],
    paragraphsAfter: [
      `개인정보 관련 문의: ${SITE.contactEmail}`,
    ],
  },
  {
    id: "security",
    title: "10. 안전성 확보 조치",
    paragraphs: [
      "운영자는 개인정보의 안전한 처리를 위해 최소 수집 원칙, 접근 권한 관리, HTTPS 기반의 보안 통신 등 합리적인 보호 조치를 적용하고 있습니다.",
      "다만 인터넷 환경의 특성상 모든 보안 위험을 완전히 방지할 수는 없으며, 운영자는 개인정보 보호를 위해 지속적으로 노력합니다.",
    ],
  },
  {
    id: "children",
    title: "11. 아동의 개인정보",
    paragraphs: [
      "앱은 만 14세 미만 아동을 대상으로 하지 않으며, 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다.",
      "관련 문의가 있을 경우 운영자에게 연락해 주시면 확인 후 필요한 조치를 진행하겠습니다.",
    ],
  },
  {
    id: "changes",
    title: "12. 방침 변경",
    paragraphs: [
      "본 방침은 관련 법령 및 서비스 내용의 변경에 따라 수정될 수 있으며, 변경 사항은 앱 또는 웹페이지를 통해 안내합니다.",
      "중요한 변경 사항이 있는 경우 시행일 최소 7일 전부터 공지하며, 이용자에게 불리한 변경의 경우 최소 30일 전에 안내합니다.",
    ],
  },
  {
    id: "contact",
    title: "13. 문의처",
    paragraphs: [
      "개인정보 처리와 관련한 문의 및 요청 사항은 아래 이메일로 연락해 주세요.",
      `이메일: ${SITE.contactEmail}`,
    ],
  },
] satisfies readonly PrivacySection[];

export const PRIVACY_TOC = PRIVACY_SECTIONS.map(({ id, title }) => ({
  id,
  title,
}));
