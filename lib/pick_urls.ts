import data from './data'
import * as R from 'ramda'

const baseUrl = '//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ytkg04-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til'

const pickUrlCount = 2

const pickUrls = (tags: string[], count: number) => {
  const default_codes: string[] = [] // data['other']

  const urls = R.uniq(R.transpose(tags.map((tag) => data[tag] || default_codes)).flat()).map((code) => {
    return `${baseUrl}&${code}`
  })

  if (urls.length < pickUrlCount) {
    console.log('----------------')
    console.log('ないよ')
    console.log(tags)
    console.log(urls)
    console.log('----------------')
  }

  return R.take(count || pickUrlCount, urls)
}

export default pickUrls
