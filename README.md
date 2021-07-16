# s3event-hook

## セットアップ

```
$ npm install
$ npm run setup
```

## 起動

```
$ npm start
```

## lambda を動かす

ローカル起動した S3 にファイルを Put すると Lambda が起動するようになっている。S3 にファイルを置くためのエンドポイントを用意しているのでそこを叩く

```
$ curl http://localhost:8080/
```
