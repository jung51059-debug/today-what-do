# 오늘 뭐 하지? — 랜딩페이지

「오늘 뭐 하지?」 Android 앱의 공식 랜딩페이지 및 Google Play Console용 개인정보처리방침 페이지입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- lucide-react (아이콘)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인하세요.

## 페이지

| 경로 | 설명 |
|------|------|
| `/` | 앱 소개 랜딩페이지 |
| `/privacy` | 개인정보처리방침 (Play Console 등록용) |

## 배포 전 설정

`content/site.ts` 파일에서 아래 값을 실제 정보로 수정하세요.

- `operatorName` — 운영자명 또는 상호
- `contactEmail` — 문의 이메일
- `url` — 배포 도메인 (예: `https://today-whatdo.vercel.app`)
- `playStoreUrl` — Google Play 스토어 URL (출시 전에는 `#` 유지)
- `playStoreLabel` — 출시 후 `"Google Play에서 다운로드"` 등으로 변경

`content/privacy.ts`에서 시행일·버전을 업데이트하세요.

`public/app-icon.png`에 앱 아이콘(512×512 권장)을 추가하세요. 없으면 🎲 이모지 fallback이 표시됩니다.

## Vercel 배포

1. [Vercel](https://vercel.com)에 GitHub 저장소를 연결합니다.
2. Framework Preset: **Next.js** (자동 감지)
3. Deploy를 클릭합니다.
4. 배포 완료 후 `content/site.ts`의 `url`을 실제 도메인으로 수정하고 재배포합니다.

또는 Vercel CLI:

```bash
npx vercel
```

## Google Play Console 등록

앱 출시 시 Play Console → **앱 콘텐츠** → **개인정보처리방침**에 아래 URL을 등록하세요.

```
https://[your-domain]/privacy
```

예시:

```
https://today-whatdo.vercel.app/privacy
```

## 프로젝트 구조

```
app/
  layout.tsx          # metadata, 폰트, 전역 레이아웃
  page.tsx            # 랜딩페이지
  privacy/page.tsx    # 개인정보처리방침
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  Features.tsx
  HowItWorks.tsx
  FAQ.tsx
  CTA.tsx
  AppIcon.tsx
  PlayStoreButton.tsx
content/
  site.ts             # 사이트 상수 (기능, FAQ 등)
  privacy.ts          # 개인정보처리방침 본문
public/
  app-icon.png        # 앱 아이콘 (직접 추가)
```

## 스크립트

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint
```
