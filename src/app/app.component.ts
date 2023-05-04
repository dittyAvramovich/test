import { ChangeDetectorRef, Component } from '@angular/core';
import { debounceTime, delay, distinctUntilChanged, map, mergeMap, of, Subject, Subscription } from 'rxjs';
import { TreeService } from './tree/tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nodes: any;
  search: string = "";
  public keyUp = new Subject<KeyboardEvent>();
  private subscription!: Subscription;

  constructor(private treeService: TreeService,
    public cdRef: ChangeDetectorRef) {
    this.subscription = this.keyUp.pipe(
      map(event => this.search),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(
        delay(500),
      )),
    ).subscribe(p => {
      this.treeService.filter(p).subscribe(res => {
        this.nodes = res;
        this.cdRef.detectChanges();
      })
    });
  }

  ngOnInit() {
    this.treeService.fetchNodes().subscribe(res => {
      this.nodes = res;
    });
  }
}
