export default function (output) {
  return function (error) {
    output.error('Error:', error)
  }
}
