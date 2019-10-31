export default function (restClient) {
  return function () {
    return restClient.post()
  }
}
