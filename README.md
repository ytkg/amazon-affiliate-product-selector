# amazon-affiliate-product-selector

## Usage
```bash
$ curl -s 'http://0.0.0.0:8787/?tags=ruby,rails&associate_id=ytkg04-22' | jq
[
  "<iframe sandbox=\"allow-popups allow-scripts allow-modals allow-forms allow-same-origin\" style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ytkg04-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4297124378&linkId=ab79cf41594d33d4f4b194b2bed0668e\"></iframe>",
  "<iframe sandbox=\"allow-popups allow-scripts allow-modals allow-forms allow-same-origin\" style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ytkg04-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4297114623&linkId=940b10383211102c07b1f0a0eb01d90b\"></iframe>"
]
```

### Query parameters
| Name         | Type    | Required | Default | Example                |
|--------------|---------|----------|---------|------------------------|
| tags         | String  | YES      |         | tags=ruby,rails        |
| associate_id | String  | YES      |         | associate_id=ytkg04-22 |
| count        | Integer | NO       | 2       | count=3                |

## Development
```bash
$ yarn dev
```

## Deployment
```bash
$ yarn deploy
```
