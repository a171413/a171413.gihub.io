<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <card type="timeline" class="card-plain">
          <time-line type="simple">
            <time-line-item
              inverted
              badge-type="warning"
            >
<!--              badge-icon="tim-icons icon-gift-2"-->
              <span slot="header" class="badge badge-success">生まれ</span>
              <p slot="content">

              </p>
            </time-line-item>
            <time-line-item
              inverted
              badge-type="danger"
            >
<!--              badge-icon="tim-icons icon-bag-16"-->
              <span slot="header" class="badge badge-danger">小学校</span>

              <template slot="content">
                <p>
                  小学校には3つ通いました．父の仕事の関係で大分→北海道→東京と引っ越しを繰り返していました．
                </p>
                <p>
                  大分には幼稚園年中〜小学3年途中の間，住んでいました．
                  小学校に片道1時間かけて徒歩で通っており，靴飛ばしをしていたら沿道の民家に入れてしまうという失態を犯したことがありました．
                  その時は一緒に帰っていた友人の靴を借りて左右違う靴で帰りました．今考えればなぜそれでバレないと思ったのか謎でした．反省反省．
                  この頃は特に趣味もなく，放課後は友達とゲームボーイアドバンスでロックマンをやることが日課でした．
                  習い事もやっておらず，毎週末には祖父母の家に泊まりに行って遊んでもらっていました．
                </p>
                <p>
                  北海道に引っ越してからは極真空手を習い始めたり塾に通い始めたり，やっぱり空手より野球だと言って野球チームに加入したりと激動の時期でした．
                  この頃に仲良くなった友達とは今でも連絡を取り合う仲で，引っ越しの多かった自分にとって唯一ふるさとと呼べる場所でした．
                </p>
                <p>
                  東京には小学6年生の終わりごろに転校してきました．親に言われるがままに訳もわからず中学受験をし，失敗し結構混沌としていました．
                </p>
                </template>

              <h6 slot="footer">
                <i class="ti-time"></i> 2000~2004年
              </h6>
            </time-line-item>

            <time-line-item
              inverted
              badge-type="success"
              badge-icon="tim-icons icon-gift-2"
            >
              <span slot="header" class="badge badge-success">中学校</span>
              <p slot="content">
                中学校には電車で通い，野球部に加入＋学習塾にも通っていて人生で最も忙しい3年間を送ったと思います．
                ただ，ここでの出会いのおかげで今の大学に行きたいと思うようになり，人生の道標ができた時期でもありました．
              </p>
            </time-line-item>

            <time-line-item
              inverted
              badge-type="info"
              badge-icon="tim-icons icon-planet"
            >
              <span slot="header" class="badges badge-info">高校</span>

              <template slot="content">
                <p>
                  高校は中堅私立と言われるような高校に通いました．
                  自分の本来の偏差値よりも少し高いとこに受かったため，周りには自分よりも圧倒的に頭が良い生徒が多く，絶望感しかありませんでした．
                  心のどこかで「この学校に通っていればそこそこの大学には受かる」などと思っていたため大して勉強もせず，案の定浪人することになりました．
                </p>
                <p>

                </p>
                <hr />
              </template>
            </time-line-item>
            <time-line-item
              inverted
              badge-type="success"
              badge-icon="tim-icons icon-gift-2"
            >
              <span slot="header" class="badge badge-success">浪人→大学〜</span>
              <p>
                浪人時代は人生で一番勉強しました．また，勉強が楽しかったです．「どうして高校のときにもっとやれなかったのだろう」とは何度も思ったものです．
              </p>
              <p slot="content">
                大学は第一志望の東京学芸大学に合格することができ，教師を目指すことになりました．
                教師は中学2年生のころから目指していたのですが，教師について勉強すればするほど「教師でいいのか」と思うようになり，そのころに研究室の配属もあって何となくエンジニアを目指すようになりました．
                ここで出会った大学院の先輩を今でも尊敬しています．
                もっと専門性を高めるべく，東京学芸大学大学院に進学し，今に至ります．
              </p>
            </time-line-item>
          </time-line>
        </card>
      </div>
      <div class="col-lg-6">
        <card type="testimonial" header-classes="card-header-avatar">
          <a slot="header" href="#pablo">
            <img class="img img-raised" src="img//james.jpg" alt="Card image" />
          </a>

          <p class="card-description">
            The networking at Web Summit is like no other European tech
            conference.
          </p>
          <div class="icon icon-primary"><i class="fa fa-quote-right"></i></div>

          <template slot="footer">
            <h4 class="card-title">Robert Priscen</h4>
            <p class="category">@robertpriscen</p>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from '../components/Dashboard/TaskList';
import {
  BaseSwitch,
  TimeLine,
  TimeLineItem,
  BaseCheckbox
} from '@/components';

export default {
  name: 'widgets-page',
  components: {
    BaseSwitch,
    TimeLine,
    TimeLineItem,
    TaskList,
    BaseCheckbox
  },
  data() {
    return {
      allContributions: true,
      pastWeekContributions: false
    }
  }
}
</script>

<style></style>
