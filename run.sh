wdir="/mnt/work-local"

docker run -it --rm \
	-v $wdir/atolyetane:/app \
	-v $wdir/webp-ts-dev-boiler/node_modules:/app/node_modules \
	-p 8080:8080 \
	node:alpine /bin/sh
1//09hu3otbYlRY7CgYIARAAGAkSNwF-L9IrwH3uKMH9CmIogs424WoUFLXIZ3R_6NdltOd9ozPYRTj1i7PFf6TO4Xs_TmUJp9IcU40