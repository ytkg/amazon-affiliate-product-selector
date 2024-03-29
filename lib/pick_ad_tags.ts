import data from './data'
import * as R from 'ramda'

const defaultPickCount = 2

const generateUrl = (associate_id: string, code: string) => {
  return `https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=${associate_id}&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&${code}`
}

const generateAdTag = (url: string) => {
  return `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="${url}"></iframe>`
}

const pickAdTags = (tags: string[], associate_id: string, count: number) => {
  const default_codes: string[] = [] // data['other']

  const adTags = R.uniq(R.transpose(tags.map((tag) => data[tag] || default_codes)).flat()).map((code) => {
    const url = generateUrl(associate_id, code)
    return generateAdTag(url)
  })

  if (adTags.length < defaultPickCount) {
    console.log('----------------')
    console.log('ないよ')
    console.log(tags)
    console.log(adTags)
    console.log('----------------')
  }

  return R.take(count || defaultPickCount, adTags)
}

export default pickAdTags
