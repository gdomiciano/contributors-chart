export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    config.setHeader('Accept', 'application/vnd.github.v3+json')
    console.log('Making request to ' + config)
  })
}
