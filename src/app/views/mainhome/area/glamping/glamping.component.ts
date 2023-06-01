import { Component } from '@angular/core';

@Component({
  selector: 'app-glamping',
  templateUrl: './glamping.component.html',
  styleUrls: ['./glamping.component.css']
})
export class GlampingComponent {
  imageObject = [{
    image: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_1.jpg',
    thumbImage: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_1.jpg',
    title: ' 경기도 연천 고대산캠핑리조트'
  }, {
    image: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_2.jpg',
    thumbImage: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_2.jpg',
    title : '강원도 원주 치악캠핑리조트'
  }, {
    image: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_3.jpg',
    thumbImage: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_3.jpg',
    title: '충청북도 충주 탄금호캠핑리조트'
  }, {
    image: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_4.jpg',
    thumbImage: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_4.jpg',
    title: '경기도 안산 탄도항노을캠핑장'
  }, {
    image: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_6.jpg',
    thumbImage: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_6.jpg',
    title : '경기도 양주 애견글램핑'
  }, {
    image: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_5.jpg',
    thumbImage: 'https://www.kkday.com/ko/blog/wp-content/uploads/korea_camping_spot_5.jpg',
    title: '경기도 화성 사강스마트팜캠핑장'
  }];
}
