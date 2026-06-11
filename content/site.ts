/** 사이트 전역 상수 — 배포 전 아래 값을 실제 정보로 수정하세요 */

export const SITE = {
  name: "오늘 뭐 하지?",
  label: "오늘의 활동 추천 앱",
  tagline: "지금 기분에 맞게 할 일을 추천해줄게요",
  heroDescription:
    "오늘 뭐 할지 고민될 때,\n상황에 맞는 활동과 근처 장소를 추천해드려요.",
  description:
    "지금 기분과 상황에 맞는 오늘의 활동을 추천해 주는 Android 앱. 회원가입 없이 바로 사용하세요.",
  ctaDescription:
    "상황에 맞는 활동을 추천받고\n근처 장소까지 바로 찾아보세요.",
  ctaTitle: "오늘 뭐 할지 고민될 때, 지금 바로 시작해 보세요.",
  packageName: "com.example.flutter_application_1",
  /** Google Play 출시 후 실제 URL로 교체 */
  playStoreUrl: "#",
  playStoreButtonLabel: "Google Play에서 받기",
  headerDownloadLabel: "다운로드",
  operatorName: "정현순",
  representativeName: "정현순",
  address: "대한민국",
  contactEmail: "jung51059@gmail.com",
  url: "https://today-whatdo.vercel.app",
  promoImage: "/promo.png",
} as const;

export const OPERATOR_NAME = SITE.operatorName;
export const OPERATOR_REPRESENTATIVE = SITE.representativeName;
export const OPERATOR_ADDRESS = SITE.address;
export const CONTACT_EMAIL = SITE.contactEmail;

export const CTA_HIGHLIGHTS = [
  "회원가입 없이 바로 사용",
  "근처 장소 자동 추천",
  "관심 없는 활동 제외",
] as const;

export const APP_PREVIEW = {
  title: "앱 미리보기",
  subtitle:
    "상황 선택부터 근처 장소 탐색까지, 3단계로 오늘의 활동을 찾아보세요.",
  screens: [
    {
      src: "/mockups/home.png",
      alt: "상황과 기분을 선택하는 홈 화면 목업",
      label: "상황 선택",
      width: 452,
      height: 977,
    },
    {
      src: "/mockups/recommend.png",
      alt: "오늘의 추천 활동 화면 목업",
      label: "오늘의 추천",
      width: 489,
      height: 979,
    },
    {
      src: "/mockups/places.png",
      alt: "근처 장소 목록 화면 목업",
      label: "근처 장소",
      width: 514,
      height: 1011,
    },
  ],
} as const;

export const FEATURES = [
  {
    icon: "Sparkles",
    emoji: "✨",
    title: "상황·기분 맞춤 추천",
    description:
      "지금 기분에 맞는 활동을 추천해요.",
  },
  {
    icon: "MapPin",
    emoji: "📍",
    title: "근처 장소 찾기",
    description:
      "추천받은 활동에 맞는 근처 장소를 바로 찾아볼 수 있어요.",
  },
  {
    icon: "Heart",
    emoji: "❤️",
    title: "활동·장소 저장",
    description:
      "마음에 드는 활동과 장소를 저장하고 나중에 다시 볼 수 있어요.",
  },
  {
    icon: "Dices",
    emoji: "🎲",
    title: "랜덤 추천",
    description:
      "뭘 할지 모르겠을 때 버튼 한 번으로 오늘의 활동을 골라줘요.",
  },
] as const;

export const FEATURES_SECTION = {
  title: "이런 기능을 제공해요",
  subtitle:
    "활동 고민부터 근처 장소 탐색까지, 일상에 필요한 기능만 담았습니다.",
} as const;

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "상황과 기분 선택",
    description: "혼자, 데이트, 친구와, 밤 감성 등 원하는 조건을 골라요.",
  },
  {
    step: "2",
    title: "추천 활동 받기",
    description: "카페, 산책, 영화, 전시회 등 오늘 할 일을 추천받아요.",
  },
  {
    step: "3",
    title: "근처 장소 확인",
    description: "추천 활동에 맞는 가까운 장소를 확인하고 저장해요.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "회원가입이 필요한가요?",
    answer: "아니요. 회원가입 없이 바로 사용할 수 있어요.",
  },
  {
    question: "위치 권한은 꼭 필요한가요?",
    answer:
      "아니요. 현재 위치를 사용하면 더 편하지만, 지역 검색으로도 이용할 수 있어요.",
  },
  {
    question: "저장한 데이터는 어디에 있나요?",
    answer: "저장한 활동과 장소는 기기 내부에 저장돼요.",
  },
  {
    question: "광고가 표시되나요?",
    answer: "무료 앱 운영을 위해 일부 화면에 광고가 표시될 수 있어요.",
  },
] as const;