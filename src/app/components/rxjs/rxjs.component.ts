import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject, combineLatest, concatMap, exhaustMap, from, fromEvent, interval, map, mergeMap, of, switchMap, take, tap, zip } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { response } from 'express';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnChanges {

  items: any[] = ['bat', 'ball', 'players', 'umpires', 'ground', 'equipment'];

  count: number = 0;
  testVariable: string = '';

  ngOnInit() {
    this.zipValues();
    this.combineLatest();
    this.streamHandler();
    this.testVariable = this.userService.testVariable
  }

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {

  }
  showImage: boolean = false;
  bat$: Subject<any> = new Subject();
  ball$: Subject<any> = new Subject();
  players$: Subject<any> = new Subject();
  unmpires$: Subject<any> = new Subject();
  ground$: Subject<any> = new Subject();
  equipment$: Subject<any> = new Subject();
  zip$: Subject<any> = new Subject();
  combineLatest$: Subject<any> = new Subject();
  stream$: Subject<any> = new Subject();
  mergeMap$: Subject<any> = new Subject();
  firstSubject: Subject<any> = new Subject();
  secondSubject: Subject<any> = new Subject();

  batButtonClickHandler() {
    this.bat$.next('clicked')
  }
  ballButtonClickHandler() {
    this.ball$.next('ball clicked')
  }
  // playersButtonClickHandler() {
  //   this.players$.next('players clicked');
  // }
  // umpiresButtonClickHandler() {
  //   this.unmpires$.next('unmpires clicked');
  // }
  // groundButtonClickHandler() {
  //   this.ground$.next('ground clicked');
  // }
  // equipmentButtonClickHandler() {
  //   this.equipment$.next('equipment clicked');
  // }
  zipButtonClickHandler() {
    this.zip$.next('zip clicked');
  }
  ngOnChanges(changes: SimpleChanges): void { }
  combineLatestButtonClickHandler() {
    this.combineLatest$.next('combine latest clicked');
    // this.combineLatest();
  }
  // count: number = 0;

  batCount: number = 0;
  //In zip, it is resolved only once all of the streams have been completed. If not, it does not emit the value. Similarly, if we click the bat button and ball button 5 times, we don't need to click the bat button and ball button the next 5 times. Since the bat stream and ball stream are complete, it just waits for the zip stream to be completed. So, when we click the zip button, zip stream also completes(we are doint zip$.next()) and then the stream is complete.
  zipValues() {
    zip(
      this.bat$.pipe(
        map((res) => {
          return `${res}${this.batCount++}`
        }),
        tap(console.log)
      ),
      this.ball$,
      // this.players$,
      // this.unmpires$,
      // this.ground$,
      // this.equipment$,
      this.zip$
    )
      .subscribe((res) => {
        this.showImage = true;
        setTimeout(() => {
          this.showImage = !this.showImage
        }, 100)
        this.count++
        console.log('count', this.count);
        console.log(res)
      })
  }

  startStream() {
    this.mergeMap$.next('clicked');
    // console.log(typeof (this.stockPrice))
  }

  emitStreamClickHandler() {
    this.stream$.next(this.count++)
  }

  streamHandler() {
    this.http.get('https://dummyjson.com/products/1').pipe(
      map((res: any) => (res.images)),
      // map((img: any) => (this.http.get(img)))
    ).subscribe(
      // ((res: any) => {
      ((res: any) => {
        res.map((url: string) => of(this.http.get(url)))
        console.log(res)
        // of(res)
        //   // .pipe(
        //   //   map((re) => { this.http.get(re) }
        //   //   ))
        //   .subscribe(
        //     // this.http.get()
        //     (res) => console.log(res)
        //   )
        // // console.log(res);
      })
      // })
      //   (res: any) => {
      //   res.subscribe((resp: any) => {
      //     // resp.subscribe((re: any) => {

      //     console.log(this.http.get(resp));
      //     // })
      //   })
      // }
    )
    // let obs: Observable<number> = of(1, 2, 3, 4);
    // obs.pipe(
    //   map((res) => of(res))
    // ).subscribe(
    //   (res) => {
    //     console.log((res)),
    //       res.subscribe((res) => {
    //         console.log(res)
    //       }
    //       )
    //   }
    // )
    // this.firstSubscription();
    // this.firstSubject.next('first subject');
    // let innerStream$: Observable<any> = interval(1000).pipe(
    // );
    // this.mergeMap$.pipe(
    //   // tap((res) => console.log(res)),
    //   mergeMap((outerRes) => this.stream$.pipe(
    //     // take(this.count),
    //     map((res) => {
    //       return { outerStream: outerRes, res: res }
    //     }))),
    //   // tap((res) => console.log(res, "inner obs"))
    // ).subscribe((res) => console.log(res.outerStream, '-', res.res))
  }
  firstSubscription() {
    this.obs.pipe(map((res) => res + 1)).subscribe((res) => console.log(res));
    this.firstSubject.pipe(map((res) => res + 'changed')).subscribe();
    this.secondSubscription();
  }

  secondSubscription() {
    this.obs.subscribe((res) => console.log(res))
  }
  // this.stream$.pipe(
  //   mergeMap((res) => {
  //     return innerStream$.pipe(
  //       // Assuming you want to take only the first value from the inner stream
  //       // If you want to handle all values, you can remove the 'take(1)' part
  //       mergeMap(innerRes => of({ outer: res, inner: innerRes }).pipe(take(1))),
  //       // mergeMap((innerRes) => { return {outer: res, inner: innerRes }}.pipe(take(1)))
  //     );
  //   })
  // ).subscribe(res => console.log(res));
  // this.stream$.pipe(mergeMap(id => {
  //   this.addToArray(id)
  //   return this.increment(id)

  // })).subscribe(console.log)




  stockPrice: number = 100;



  obs: Observable<any> = of(1, 3, 5);
  placeBid() {
    // this.a.subscribe((res)=>console.log(res))
    console.log(this.stockPrice)
  }
  dummyArray: any[] = [];

  addToArray(val: any): Promise<any> {
    // this.a.subscribe();
    console.log(this.dummyArray);
    return Promise.resolve(this.dummyArray.push(val));
  }
  increment(id: any) {
    if (id % 2 === 0) {
      return of(id + 1)
    }
    const delayedValue$ = new Promise(resolve => {
      setTimeout(() => {
        resolve(id + 10);
      }, 1000);
    });

    return (delayedValue$);
  }
  //read zipValues method's comment first.
  //For combine latest, once all the streams are complete, it emits a value. Once after each stream is complete, it does not wait for the remaining streams. Even if one stream completes freshly, it emits new value. It combines the latest value with the existing and emits. That's why the name combineLatest. It combines the latest value to the existing.
  combineLatest() {
    combineLatest([
      this.bat$,
      this.ball$,
      this.combineLatest$
      // this.players$,
      // this.unmpires$,
      // this.ground$,
      // this.equipment$,
      // this.zip$
    ])
      .subscribe((res) => {
        this.showImage = true;
        setTimeout(() => {
          this.showImage = !this.showImage
        }, 100)
        this.count++
        console.log('combine latest->count', this.count);
      })
  }
}