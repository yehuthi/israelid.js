.PHONY: build test clean
NPM ?= npm

OUT=./dist/index.js ./dist/index.d.ts

build: ${OUT}
${OUT}: ./index.ts ./tsconfig.json ./package.json
	${NPM} run build

test: ${OUT}
	${NPM} run test

clean:
	rm -rf ./dist
