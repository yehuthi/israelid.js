.PHONY: build test clean doc
NPM ?= npm

OUT=./dist/index.js ./dist/index.d.ts

build: ${OUT}
${OUT}: ./index.ts ./tsconfig.json ./package.json
	${NPM} run build

test: ${OUT}
	${NPM} run test

doc:
	pnpm typedoc ./index.ts                                               \
		--out ./dist/docs                                                 \
		--plugin typedoc-github-theme

doc-publish: doc
	pnpx gh-pages                                                         \
		-d dist/docs                                                      \
		-b gh-pages                                                       \
		-m "docs"                                                         \
		--nojekyll --no-history

clean:
	rm -rf ./dist

