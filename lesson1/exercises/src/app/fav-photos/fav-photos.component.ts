import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Gallery';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/118316093_10223367698291566_238447222555052790_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=--Kin73D6vQAX9O73Jl&_nc_ht=scontent-ort2-1.xx&oh=e989d139955e0e3515f33552d48f4e5e&oe=6133668A';
  image3 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/87974174_2931927586859303_9121007388344713216_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=DCpBtWOBnecAX_hsABC&_nc_ht=scontent-ort2-1.xx&oh=650ec4cd6933a746167e6b66fe70713a&oe=61338CC5';

  constructor() { }

  ngOnInit() {
  }

}