import { Component } from '@angular/core';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.css']
})
export class MountainComponent {
  imageObject = [{
    image: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/687d2c1b6b83e.jpg',
    thumbImage: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/687d2c1b6b83e.jpg',
    title: '정읍 일곱식구 캠핑장'
  }, {
    image: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/e80febc6a8119.jpg',
    thumbImage: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/e80febc6a8119.jpg',
    title : '용인 은이골 가족 캠핑장'
  }, {
    image: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/f114e95732dd1.jpg',
    thumbImage: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/f114e95732dd1.jpg',
    title: '충주 천등산 캠핑장'
  }, {
    image: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/9012bd921e9f8.jpg',
    thumbImage: 'https://cdn.imweb.me/upload/S2021011502a2f4eeeb339/9012bd921e9f8.jpg',
    title: '정읍 자두마을 캠핑장 '
  }];
}
