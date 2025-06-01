dev:
	npm run dev

build:
	docker build -t tranchida/esbconsolenextjs:1.0.2 .

deploy: build
	kubectl apply -f deployment.yaml
