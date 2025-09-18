# ESLint Config Package - Requirements (ESM-only)

目的
- 再利用しやすく、現代のツールチェーンに最適化された ESM 専用の ESLint 設定パッケージを提供する。

対象ユーザー
- Node.js（ESM）プロジェクト、ブラウザ向けビルド、TypeScript（ESM）プロジェクト。

互換性方針
- パッケージは ESM のみをサポートする。CJS 互換は提供しない。
- `package.json` に `type: "module"` を設定し、`exports` は ESM 用のエントリのみを用意する。

配布とエントリポイント
- `exports` 例:
	```json
	{
		"exports": {
			".": {
				"import": "./src/eslint.config.mjs"
			}
		}
	}
	```
- `publishConfig.access: "public"`（公開スコープありの場合）

依存関係の扱い
- `dependencies` に `eslint` と主要プラグインを置く（例: `eslint`, `typescript-eslint`）。
- `devDependencies` にテストやビルドツールを配置。

TypeScript の扱い（仮）
- TypeScript を使って設定を記述する場合は ESM 出力（`.mjs`）を用意し、`tsconfig.json` をパッケージルートに置く。
- parserOptions の `tsconfigRootDir` を明示してパーサエラーを防ぐ。

テスト方針（仮）
- fixtures（`test/fixtures/good` / `test/fixtures/bad`）を用意し、`vitest` で ESLint を CLI 経由（`--format json`）で実行して検証する。

CI とリリース（仮）
- GitHub Actions で `pnpm install` → `pnpm test` → `pnpm lint` を実行。
- タグ付けで `pnpm publish` を行うワークフローを用意（scoped package の場合は `access: public` を指定）。

ドキュメント
- README に導入手順例（`extends` の名前、必要な peerDependencies、例）を記載。

その他注意点
- ESM-only を選ぶ場合、利用組織の 古いツールチェーン（CJS のみ）には互換性がない点を README に明記する。

