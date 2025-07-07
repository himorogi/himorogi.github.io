cd `dirname $0`
hugo server --bind=192.168.11.3 --baseURL=http://192.168.11.3 --port=1313 --renderToMemory --disableFastRender --noHTTPCache