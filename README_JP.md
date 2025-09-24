# 非想天則ガイド
## 中文社区「东方非想天则」游戏指南✨
## 中国コミュニティ「東方非想天則」Wiki✨

[简体中文](./README.md)
[English](./README_EN.md)
[日本語](./README_JP.md)

---

- [推奨]：[自動振り分け](https://wiki.514.live/) 最速のサーバーを自動で選択します。

- 中国国内ネットワーク：~~[Gitee Pagesはサービス終了しました](https://soku-cn.gitee.io)~~ [香港ミラーサイト](https://3322428.xyz)

- グローバルネットワーク：[[**推奨**]Vercel](https://hisoutensoku-cn-wiki.vercel.app) | [Github Pages](https://soku-cn.github.io)

---------------------------------------------------------
## リポジトリURL

[振り分けリポジトリ](https://github.com/soku-cn/wiki-forward) | [Githubリポジトリ](https://github.com/soku-cn/soku-cn.github.io) | [Vercel同期用Githubリポジトリ](https://github.com/ChocoFleece/Hisoutensoku-CN-wiki)

---------------------------------------------------------

## コミュニティ

[![QQ](https://img.shields.io/badge/QQ_Group-200803640-0078D6.svg?logo=tencent-qq&logoColor=white)](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=BlPlWLS0pzH53ek-6s_li9I9iyKOX2rp&authKey=IeuhBJ9I5o%2B2wsG9Ms0M1UaLEYqtSQERdxJ713CxleEak%2FBvvByzAGiJg%2Bw0zp8D&noverify=0&group_code=200803640)

※ QQは主に中国国内で利用されているSNSサービスです。お使いの環境によっては利用が難しい場合がありますので、まずはDiscordでのご連絡をお勧めします。

**Discord: @ChocoFleece @Tstar00**
「@ChocoFleeceが日本語対応しています」

「非想天則ガイド」は現在も活発に開発中です。ご興味のある方、最新情報や開発へのご協力にご興味のある方は、ぜひご参加ください。

---------------------------------------------------------

## 編集参加

### ローカルプレビュー

1. リポジトリをローカルにクローンします。


```
git clone https://github.com/soku-cn/soku-cn.github.io.git
```

2. クローン後、フォルダに移動して必要なコンポーネントをインストールします。

```
cd soku-cn.github.io
pnpm install  

# pnpm install --strict-peer-dependencies 
# 問題が発生した場合は、こちらをお試しください
```

~~~
事前にNode.js 22 (推奨) およびpnpmをインストールしてください。
~~~

3. ウェブページをビルドし、ローカルプレビューページを起動します。


```
pnpm vuepress dev src
```

>このコマンドを簡略化したスクリプト``pnpm ss``を設定しており、ローカルプレビューページを素早く起動できます。

---------------------------------------------------------

## テーマのアップグレード

```
pnpm dlx vp-update
```


---------------------------------------------------------

## テーマについて

- [vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)

>参考：[テーマ説明ドキュメント English/中国語](https://theme-hope.vuejs.press/)