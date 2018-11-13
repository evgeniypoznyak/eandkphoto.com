import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ConnectService} from "../../core/services/http/connect.service";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-grid-event',
  templateUrl: './grid-event.component.html',
  styleUrls: ['./grid-event.component.css']
})
export class GridEventComponent implements OnInit, OnDestroy {

  dataReceived: boolean = false;
  totalPictures = 0;
  eventPicturesLarge: string[];
  eventPicturesSmall: string[];
  eventCoverSmall: string;
  eventCoverLarge: string;
  displayPictures: string[];
  chunkSize: number;
  facebookSharer = 'https://www.facebook.com/sharer/sharer.php?u='

  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    this.renderPictures(this.displayPictures);
  }

  constructor(
    private http: HttpClient,
    private _connect: ConnectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.setChunkSize();
  }


  ngOnInit() {
    // this.runDevelopmentVersion();

    this.route.data.subscribe((data: Data) => {
      if (this.checkForEventData(data)) {
        this.totalPictures = data.eventsFromServer.dir.small.length;
        this.eventPicturesSmall = data.eventsFromServer.dir.small;
        this.eventPicturesLarge = data.eventsFromServer.dir.large;
        this.eventCoverSmall = data.eventsFromServer.dir.cover[0];
        this.eventCoverLarge = encodeURI(data.eventsFromServer.dir.cover[1]);
        this.displayPictures = this.getPicturesFromArray(data.eventsFromServer.dir.small, this.chunkSize);
        if (this.isCashedImage(this.eventPicturesSmall[0])) {
          this.dataReceived = true;
        } else {
          setTimeout(() => {
            this.dataReceived = true;
          }, 1000)
        }

      }
    });
  }

  setChunkSize() {
    if (window.innerWidth < 300) {
      this.chunkSize = 3;
      return;
    }
    if (window.innerWidth < 400) {
      this.chunkSize = 6;
      return;
    }
    if (window.innerWidth < 800) {
      this.chunkSize = 15;
      return;
    }
    if (window.innerWidth < 1900) {
      this.chunkSize = 20;
      return;
    }
    if (window.innerWidth < 2500) {
      this.chunkSize = 30;
      return;
    }

  }

  getPicturesFromArray(picturesArray, chunk) {
    if ((picturesArray.length - chunk) < 0) {
      return picturesArray;
    }
    let result = [];
    for (let i = 0; i < picturesArray.length - (picturesArray.length - chunk); i++) {
      result.push(picturesArray[i])
    }
    return result;
  }


  runDevelopmentVersion() {
    const data = JSON.parse('{"event":[{"id":56,"eventName":"Sara & Kevin\'s Wedding","event_date":"2016-03-15 00:00:00","name":"sara-and-kevin-wedding","description":"Description","location":"Dallas, TX"}],"dir":{"large":["http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_3929.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_3931.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_3942.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_3974.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_3980.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_3985.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4004.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4011.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4015.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4023.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4032.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4042.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4150.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4156.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4172.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4201.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4202.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4225.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_43451.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4360.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4385.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4390.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4484.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4558.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4565.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4572.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4589.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4648.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4649.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4653.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4668.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/large\\/EVG_4676.jpg"],"small":["http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_3929.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_3931.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_3942.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_3974.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_3980.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_3985.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4004.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4011.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4015.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4023.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4032.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4042.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4150.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4156.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4172.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4201.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4202.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4225.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_43451.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4360.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4385.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4390.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4484.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4558.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4565.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4572.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4589.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4648.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4649.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4653.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4668.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/small\\/EVG_4676.jpg"],"cover":["http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/event-small.jpg","http:\\/\\/data.eandkphoto.loc\\/events\\/2016\\/03-march\\/sara-and-kevin-wedding\\/event.jpg"]}}');
    this.totalPictures = data.dir.small.length;
    this.eventPicturesSmall = data.dir.small;
    this.eventPicturesLarge = data.dir.large;
    this.eventCoverSmall = data.dir.cover[0];

    this.eventCoverLarge = data.dir.cover[1];
    this.dataReceived = true;
  }

  checkForEventData(data: Data) {
    if (
      data &&
      data.eventsFromServer &&
      data.eventsFromServer.event &&
      data.eventsFromServer.event.length > 0 &&
      data.eventsFromServer.dir &&
      data.eventsFromServer.dir['cover'] &&
      data.eventsFromServer.dir['cover'].length > 1 &&
      data.eventsFromServer.dir.small &&
      data.eventsFromServer.dir.large &&
      data.eventsFromServer.dir.small.length > 0 &&
      data.eventsFromServer.dir.large.length > 0 &&
      (data.eventsFromServer.dir.small.length === data.eventsFromServer.dir.large.length) &&
      data.eventsFromServer.event[0]['description'] &&
      data.eventsFromServer.event[0]['description'].length > 0 &&
      data.eventsFromServer.event[0]['eventName'] &&
      data.eventsFromServer.event[0]['eventName'].length > 0 &&
      data.eventsFromServer.event[0]['event_date'] &&
      data.eventsFromServer.event[0]['event_date'].length > 0 &&
      data.eventsFromServer.event[0]['location'] &&
      data.eventsFromServer.event[0]['location'].length > 0 &&
      data.eventsFromServer.event[0]['name'] &&
      data.eventsFromServer.event[0]['name'].length > 0
    ) {
      return true;
    }
    return true;
  }

  getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;
    return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  }
  ;

  getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body).scrollTop;
  }

  pushPicturesToDisplay() {
    for (let i = 0; i < this.chunkSize; i++) {
      if (this.displayPictures.length < this.eventPicturesSmall.length) {
        this.displayPictures.push(this.eventPicturesSmall[this.displayPictures.length]);
      }

    }
  }

  renderPictures(pictureArray) {
    if (pictureArray) {
      if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight - 200) {
        return
      }
      else {
        this.pushPicturesToDisplay();
      }
      ;
    }
  }

  ngOnDestroy() {
    window.onscroll = null;
  }

  onDownloadAll() {
    const total = this.eventPicturesLarge.length;
    for (let i = 0; i < total; i++) {
      this.downloadPicture(i);
    }
  }


  onDownloadOnePictureClick(index) {
    this.downloadPicture(index);
  }

  createMetaTagAndReturnIt(name, value) {
    let x = document.createElement("META");
    x.setAttribute(name, value);
    return x;
  }

  downloadPicture(index) {
    const url = this.eventPicturesLarge[index];
    this._connect.onGetImageFromServerByUrl(url).subscribe((blob) => {
      this.processBlobAndGetDownloadPicture(blob, url)
    })
  }

  processBlobAndGetDownloadPicture(blob: Blob, url: string) {
    const fileName: string = url.split('/').pop();
    const e = document.createEvent('MouseEvents');
    const a = document.createElement('a');
    a['download'] = fileName;
    a['href'] = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a['download'], a['href']].join(':');
    e.initEvent('click', true, false);
    a.dispatchEvent(e);
  }

  getEncodedPicture(index) {
    return encodeURI(this.eventPicturesLarge[index])
  }

  iOS() {

    const iDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];

    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()) {
          return true;
        }
      }
    }

    return false;
  }

  isCashedImage(src) {
    const image = new Image();
    image.src = src;
    return image.complete;
  }

}
