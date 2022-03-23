FIND="Google Chrome "
REPLACE=""
CHROME_BROWSER_VERSION=$(shell echo $(shell google-chrome --version) | sed -e s/$(FIND)/$(REPLACE)/g )
CHROME_DRIVER_PATH=$(shell pwd)/chromedriver


setup:
	@echo "Current chrome browser version: ${CHROME_BROWSER_VERSION}"
	@rm -rf chromedriver_linux64.zip chromedriver
	@wget https://chromedriver.storage.googleapis.com/${CHROME_BROWSER_VERSION}/chromedriver_linux64.zip
	@unzip chromedriver_linux64.zip && rm -rf chromedriver_linux64.zip
	@echo ${CHROME_DRIVER_PATH}

start:
	docker-compose up -d

stop:
	docker-compose down

test:
	yarn test

test-cov:
	yarn test-cov

demo:
	@cd examples && node firstScript.js



