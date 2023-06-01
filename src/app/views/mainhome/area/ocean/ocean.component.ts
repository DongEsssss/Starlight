import { Component } from '@angular/core';

@Component({
  selector: 'app-ocean',
  templateUrl: './ocean.component.html',
  styleUrls: ['./ocean.component.css']
})
export class OceanComponent {
  imageObject = [{
    image: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/dfeee7eb-102e-453f-98c6-b2442339e9b2.jpeg',
    thumbImage: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/dfeee7eb-102e-453f-98c6-b2442339e9b2.jpeg',
    title: '학암포 나로 캠핑장'
  }, {
    image: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/0dd4d94d-dea6-4a89-ba4a-52dfe42c61eb.jpeg',
    thumbImage: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/0dd4d94d-dea6-4a89-ba4a-52dfe42c61eb.jpeg',
    title : '태안 둘레길 캠핑장'
  }, {
    image: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/5c1f9895-385f-493e-93a4-72119890860e.jpeg',
    thumbImage: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/5c1f9895-385f-493e-93a4-72119890860e.jpeg',
    title: '마검포 힐링 캠핑장'
  }, {
    image: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/6d0e6018-a657-461a-8a66-a717009b05a3.jpeg',
    thumbImage: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/6d0e6018-a657-461a-8a66-a717009b05a3.jpeg',
    title: '몽산포 청솔 캠핑장'
  }];
}
