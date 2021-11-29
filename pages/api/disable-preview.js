export default function handler(req, res) {
  res.clearPreviewData({ user: 'Shonjoy' })
  res.end('Preview mode disabled')
}