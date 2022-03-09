export function getId (url) {
  const arrayFromUrl = url.split('/')
  const indexOfId = arrayFromUrl.length - 2
  return arrayFromUrl[indexOfId]
}
