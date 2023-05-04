import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  @Input() nodes: any[] = [];

  constructor(private treeService: TreeService,
    public cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.nodes = this.treeService.processNodes(this.nodes);
  }

  public onFolderButtonClick(folder: any) {
    folder['expand'] = !folder['expand'];
    this.cdref.detectChanges();
  }

  public trackNode(index: number, folder: any) {
    return folder.name;
  }
}
