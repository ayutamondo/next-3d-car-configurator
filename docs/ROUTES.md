### ルーティング（App Router）

想定ディレクトリ：

- src/app/layout.tsx
- src/app/page.tsx
- src/app/configurator/page.tsx
- src/app/gallery/page.tsx
- src/app/specs/page.tsx

### URL クエリ仕様（共有 URL）

/configurator で状態をクエリで表現し、同一状態を復元できるようにする。

例：
/configurator?paint=midnight_blue&wheels=sport_21&env=studio&cam=front

#### パラメータ一覧（初期案）

- paint: string（例: midnight_blue / pearl_white / crimson_red）
- wheels: string（例: sport_21 / classic_19）
- env: string（例: studio / garage / sunset）
- cam: string（例: front / side / rear / interior）
- ar: 0|1（オート回転、任意）
- v: number（将来の互換性用のバージョン、任意）

#### 復元ルール

- クエリにない項目はデフォルト値を使う
- 不正値はデフォルトにフォールバック
- URL 更新は「状態変更時に shallow で置換」想定（UX を損ねない）

### Gallery -> Configurator の遷移

ギャラリーで「Open」を押した場合：

- 基本：対象 Build をクエリに変換して /configurator?.... に遷移
- 代替：/configurator?buildId=... を使い localStorage から復元（好みで選択）
  - ただし共有が主目的ならクエリ変換が分かりやすい
