const url = "https://www.example.com";
console.info(url);

const encodedUrl = encodeURI(url);
console.info(encodedUrl);

const decodedUrl = decodeURI(encodedUrl);
console.info(decodedUrl);

// ENCODE URI COMPONENT

const value = "aufa&azzaky=arief";
const urlComponent = 'https://www.example.com/?name=';

const encodedUrlComponent = encodeURIComponent(value);
console.info(encodedUrlComponent);

const decodedUrlComponent = decodeURIComponent(encodedUrlComponent);
console.info(decodedUrlComponent);

