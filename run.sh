wdir="/mnt/work-local"

docker run -it --rm \
	-v $wdir/atolyetane:/app \
	-v $wdir/webp-ts-dev-boiler/node_modules:/app/node_modules \
	-p 8080:8080 \
	node:alpine /bin/sh
