# FESA -HP

https://fesa.netlify.app/

* フクダデンキのコーポレートサイト

https://kei-s-lifehack.hatenablog.com/entry/works

* 設計での要件など

## 内容変更方法

情報を修正する際は

* `data/ShopData.jsx`
* `data/WorkData.jsx`
* `./summer2020.jsx`

を修正します

その後( 会社のメアドで ) 

https://app.netlify.com/sites/fesa/deploys

に login し、build して `_redict` も 202 にした
production を deploy すれば 適用されます


## todos

* meta data の適用。検索最適化
* OGP img, desc, data, の設定
* Next.js で再構築して 静的排泄して FTP 先の hi-ho に直接送る
* contentful あたりの cms を埋め込んで web から編集できるようにする
