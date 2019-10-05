import { Component, OnInit } from '@angular/core';
import { Album } from './Album';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  discList : Album[];

  constructor() { }

  ngOnInit() {
    this.discList = this.getAlbums();
  }

  getAlbums() : Album[]{
    return [new Album('Fast Loud Death','Lost Society', 200,'https://www.nuclearblast.de/static/articles/235/235618.jpg/1000x1000.jpg'),
            new Album('Khaos Legion', 'Arch Enemy', 250,'https://www.nuclearblast.de/static/articles/179/179278.jpg/1000x1000.jpg'),
          new Album('Ecliptica - Revisited', 'Sonata Arctica', 150,'https://www.nuclearblast.de/static/articles/237/237357.jpg/1000x1000.jpg'),
        new Album('Lightning Bolt','Pearl Jam',300,'https://downloads-pearljam-com.s3.amazonaws.com/img/album-art/1463090805020c40c2530cde7fe2b6e223731e7c10.jpg'),
      new Album('Audioslave', 'Audioslave', 450,'https://www.udiscovermusic.com/wp-content/uploads/2018/11/Audioslave-debut-album-cover-artwork-web-optimised-820.jpg'),
    new Album('Hoy como ayer', 'Carajo', 200, 'http://cdn-d15c.kxcdn.com/fotos/discos/000/012/026/original/carajo-hoy-como-ayer.png'),
  new Album('Rage against the machine', 'Rage against the machine', 270,'https://images-na.ssl-images-amazon.com/images/I/61VJ%2BbTeBlL._SY355_.jpg'),
  new Album('Rust in Peace', 'Megadeth', 350,'https://www.udiscovermusic.com/wp-content/uploads/2019/09/Megadeth-Rust-In-Peace-album-cover-820.jpg'),
  new Album('Time Stand Still','Unleash the Archers', 260,'https://img.discogs.com/yY70Z6PIoaFSKAGQhq9QxJIIEAw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7172468-1469033911-1687.jpeg.jpg'),
  new Album('The Pic of Destiny','Tenacious D', 1500, 'https://vignette.wikia.nocookie.net/tenaciousd/images/e/ef/Pickofdestiny.jpg/revision/latest?cb=20170313212325')]
  }
}

