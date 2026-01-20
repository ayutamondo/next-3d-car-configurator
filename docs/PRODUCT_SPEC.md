### プロダクト概要

本プロジェクトは「ハイエンド・カー・コンフィギュレーター」のサンプルサイトである。
Next.js(App Router) + Three.js(R3F 想定) を用い、3D 表示・カスタム・保存・共有・ギャラリー閲覧までを実装する。
公開ではなくローカルテスト用途を主眼とするが、サービスサイトとしての導線/説明/体験の完成度を重視する。

### ゴール（体験のサイクル）

1. 車を閲覧（3D ビュー）
2. カスタム（ペイント/ホイール/環境/カメラ）
3. 保存（ギャラリーに追加、サムネ生成）
4. 共有（URL に状態を埋め込み、同じ構成を復元）
5. ギャラリーで振り返り → 再編集

### ターゲット

- 3D を使った Web プロダクトのデモを見たい開発者/チーム
- UI/UX 含めた“見ごたえ”のあるサンプルを求める人

### 技術前提

- Next.js App Router（src/app）
- 3D: three / @react-three/fiber / @react-three/drei（想定）
- UI: Tailwind CSS（想定）
- 状態: URL クエリ + localStorage（必要なら Zustand）
- 起動: Docker でローカル起動可能

### ページ構成（ルーティング）

- / : Home（導入・世界観・Start 導線）
- /configurator : 3D カスタマイズのメイン画面（保存/共有）
- /gallery : 保存済み構成の一覧（復元・削除）
- /specs : スペック/比較/FAQ（説明責務）

### 共通 UI（layout.tsx 想定）

#### Header（全ページ共通）

- Left: Logo（デモ名）
- Nav: Configurator / Gallery / Specs
- Right: グローバルアクション（ページにより出し分け）
  - configurator: Share / Save / Reset
  - gallery: Export(任意) / Clear All(任意)
  - specs: なし or CTA（Go to Configurator）

#### Footer（全ページ共通）

- Tech stack（Next.js / R3F / drei / Tailwind）
- Model credits（出典・作者・ライセンス記載欄）
- Back to top

### /configurator 要件（コア）

#### 機能

- 3D 車両表示（GLB を読み込み）
- Orbit 操作（回転/ズーム）
- カスタム
  - paint（ボディカラー）
  - wheels（ホイールスタイル）
  - environment（照明プリセット）
  - cameraPreset（視点プリセット）
- Save: 現在構成を localStorage に保存
  - 可能なら canvas snapshot を生成してサムネイルとして保存
- Share: URL をクリップボードにコピー（クエリに状態を埋め込む）
- Reset: デフォルト構成に戻す
- UX: トースト通知（Saved / Copied / Reset）

#### データの単位

- 「Build（構成）」を 1 つのエンティティとして扱う（後述 DATA_MODEL.md 参照）

### /gallery 要件

- 保存した Build をカード表示（サムネ + 名前/日時 + 簡易仕様）
- 操作
  - Open（/configurator に遷移し、当該 Build の状態で復元）
  - Delete（1 件削除）
  - Clear all（任意）
- 追加の見ごたえ（任意）
  - ソート（新しい順/古い順）
  - フィルタ（paint/wheels）

### /specs 要件

- “何ができるデモか”を明確化する説明ページ
- セクション例
  - Features（保存・共有・ギャラリー）
  - Specs（表形式）
  - Compare presets（Performance / Luxury の 2 プリセットを比較）
  - FAQ（操作方法、推奨環境、注意事項）

### 3D モデル運用

- 配置: public/models/car.glb（まずは固定で OK）
- 将来的に複数車種対応する場合は public/models/{modelId}.glb
- モデル出典・ライセンスは Footer に記載（ローカルでも明記推奨）

### 非機能要件（デモ品質）

- 初回ロードが重い場合に備え Quality を落とす導線（任意）
- 3D が表示できない環境のフォールバック（簡易メッセージ）
- 主要操作がキーボード/マウスで分かる（ヘルプ/FAQ）
