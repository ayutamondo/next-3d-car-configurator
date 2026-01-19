### 実装タスク（チェックリスト）

#### Phase 0: プロジェクト土台

- [ ] Next.js(App Router) 初期化
- [ ] Tailwind 導入
- [ ] ルーティング作成（/ /configurator /gallery /specs）
- [ ] layout.tsx に Header/Footer 骨格

#### Phase 1: Configurator（保存・共有の核）

- [ ] 状態モデル（config）定義（paint/wheels/env/cam）
- [ ] URL クエリ -> 状態復元
- [ ] 状態変更 -> URL クエリ更新（replace）
- [ ] Share ボタン：URL コピー + トースト
- [ ] Save ボタン：Build 生成して localStorage 保存 + トースト
- [ ] Reset ボタン：デフォルトへ

#### Phase 2: Gallery

- [ ] localStorage から Build[] 読み込み
- [ ] カード表示（サムネ/名前/日時/概要）
- [ ] Open：クエリ付きで /configurator に遷移
- [ ] Delete：1 件削除
- [ ] Clear all（任意）

#### Phase 3: 3D（見せ場）

- [ ] GLB 読み込み（public/models/car.glb）
- [ ] OrbitControls
- [ ] 環境プリセット（env 切替で見た目が変わる）
- [ ] paint/wheels の見た目反映（できる範囲で）
- [ ] （任意）canvas snapshot を Save 時に生成し thumbnail に保存

#### Phase 4: Specs/説明

- [ ] Features セクション（保存・共有・ギャラリー）
- [ ] Specs 表
- [ ] Compare presets（ボタンで数値・説明切替）
- [ ] FAQ（操作、推奨環境、注意）

#### Quality

- [ ] 例外時フォールバック（モデルロード失敗など）
- [ ] パフォーマンス簡易対策（件数上限、軽量化）
- [ ] モデルクレジット表記（Footer）
