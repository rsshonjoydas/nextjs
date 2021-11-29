module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/signin',
        permanent: false,
      }
    ]
  }
}