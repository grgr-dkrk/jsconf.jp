import { en } from "./en"

type AvailableKeys = keyof typeof en["translation"]

export const ja: {
  translation: Partial<{ [K in AvailableKeys]: string }>
} = {
  translation: {
    speakers: "スピーカー",
    sponsors: "スポンサー",
    backToTop: "TOPへ戻る",
    festivalPeriod: "2019年11月30〜12月1日開催",
    guestSpeakers: "ゲストスピーカー",
    goToGuests: "スピーカー一覧へ",
    tickets: "チケット",
    buyTickets: "チケットを購入する",
    callForSponsors: "スポンサー募集",
    becomeASponsor: "スポンサー申込みフォームへ",
    schedule: "開催スケジュール",
    venue: "会場アクセス",
    "venue.name": "アーツ千代田 3331",
    "venue.address": "〒101-0021 東京都千代田区外神田6丁目11-14",
    "venue.url": "https://www.3331.jp/rentalspace/",
    "venue.accessBytrain": "電車でのアクセス",
    "venue.accessByTokyoMetroGinzaLine":
      "東京メトロ銀座線 末広町駅 4番出口から徒歩1分",
    "venue.accessByTokyoMetroChiyodaLine":
      "東京メトロ千代田線 湯島駅 6番出口から徒歩3分",
    "venue.accessByToeiOedoLine": "都営大江戸線 上野御徒町駅 A1出口から徒歩6分",
    "venue.accessByJrOkachimachiStation": "JR 御徒町駅 南口から徒歩7分",
    "venue.accessByJrAkihabaraStation": "JR 秋葉原駅 電気街口から徒歩8分",
    "venue.accessByPlane": "飛行機でのアクセス",
    moreDetails: "詳細",
    "venue.accessByNaritaAirport": "成田空港からJR 秋葉原駅まで約70分",
    "venue.accessByHanedaAirport": "羽田空港からJR 秋葉原駅まで約40分",
    // @ts-ignore It's not defined in en.ts
    Japanese: "日本語",
    // @ts-ignore It's not defined in en.ts
    English: "英語",
  },
}
