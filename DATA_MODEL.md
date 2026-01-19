### エンティティ：Build（保存される構成）

localStorage に保存する 1 件の構成。

#### Type（例）

- id: string（uuid 想定）
- name: string（任意。未入力なら自動生成 "Build 2026-01-19 12:34"）
- createdAt: number（epoch ms）
- updatedAt: number（任意）
- modelId: string（当面 "car" 固定で OK）
- config:
  - paint: string
  - wheels: string
  - env: string
  - cam: string
  - autoRotate: boolean（任意）
- thumbnail:
  - dataUrl: string（任意。png の data URL。容量が気になる場合は省略可）

#### localStorage キー

- KEY: "car_configurator_builds_v1"
- 値: Build[]（JSON stringify）

### クエリ <-> config のマッピング

- Query（paint/wheels/env/cam/...）から config を復元
- config から Query を生成（Share 用）

### 注意

- thumbnail(dataUrl) は容量が増えるため件数上限を設ける（例：最大 20 件）
- 上限超過時は古いものから削除、または thumbnail を持たない軽量保存に切替
