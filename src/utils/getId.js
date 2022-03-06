export function getId (url) {
  return url.split('/')[url.split('/').length - 2]
}
