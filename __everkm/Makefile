.PHONY: tag dist
tag:
	@if [ "$(TAG)" != "" ]; then \
		git tag -f $(TAG); \
		git push -f github $(TAG); \
	fi


ifneq (, $(shell echo $$DEBUG))
  EKMP = "/Users/dayu/Coder/everkm/everkm2/be/everkm-publish/target/debug/everkm-publish"
else
  EKMP = ./node_modules/.bin/everkm-publish
endif

work:
	$(EKMP) \
		serve \
		--work-dir ../ \
		--theme youlog

preview:
	$(EKMP) web --work-dir dist
 
dist:
	$(EKMP) serve \
		--theme yilog \
		--export

