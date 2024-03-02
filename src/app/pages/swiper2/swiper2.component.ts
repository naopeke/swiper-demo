import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectCards, EffectCreative } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectCards, EffectCreative]);

@Component({
  selector: 'app-swiper2',
  templateUrl: './swiper2.component.html',
  styleUrls: ['./swiper2.component.css']
})
export class Swiper2Component implements OnInit, AfterViewInit {

  @ViewChild('mySwiper') mySwiper: any; // Swiperの要素にアクセスするためのViewChild

  config = {
    slidesPerView: 3, // スライドの数を自動調整
    spaceBetween: 50,
    navigation: true,
    pagination: { 
      el: '.swiper-pagination', // ページネーションの要素
      clickable: true },
    scrollbar: { draggable: true },
    effect: 'coverflow', // エフェクトをcoverflowに設定
    coverflowEffect: {
      rotate: 50, // スライドの回転角度
      stretch: 0, // スライド間の距離
      depth: 100, // スライドの深さ効果
      modifier: 1, // エフェクトの影響度
      slideShadows: true, // スライドの影を表示
    },
    initialSlide: 0, // 最初のスライドのインデックスを0に設定
    simulateTouch: true, // タッチイベントをシミュレートする
    loop: false, // ループモードを有効にする
    on: {
      click: (event: any) => {
        console.log('Clicked slide index:', event.clickedIndex);
      }
    }
  };


    onSwiper([swiper]) {
      console.log(swiper);
    }
    onSlideChange() {
      console.log('slide change');
    }

 // スライドがクリックされたときの処理
    onSlideClicked(event: any) {
    const clickedIndex = event.clickedIndex; // クリックされたスライドのインデックスを取得
    console.log('Clicked slide index:', clickedIndex);

  // ここでクリックされたスライドに関連するデータを処理し、表示するなどの操作を行う
  // 例えば、clickedIndexに基づいてデータを取得して表示するなどの処理を行う
}
    


    ngOnInit(): void {
      if (this.mySwiper && this.mySwiper.swiperRef) {
        this.mySwiper.swiperRef.update(); // Swiperを初期化
        console.log(this.mySwiper); // this.mySwiperが定義されていることを確認
      }
    }

    ngAfterViewInit(): void {
      // this.mySwiper.swiperRef.update(); // Swiperを初期化
      // console.log(this.mySwiper);//this.mySwiperが定義されていることを確認
  }

}