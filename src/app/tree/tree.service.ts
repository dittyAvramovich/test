
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TreeService {
  baseUrl = "https://localhost:7043/api/files";
  constructor(private httpclient: HttpClient) {

  }

  public fetchNodes(): Observable<any> {
    return this.httpclient.get(this.baseUrl);
  }

  public filter(prefix: string) {
    return this.httpclient.get(this.baseUrl + "/" + prefix.toString())
  }

  public processNodes(nodes: Array<any>): Array<any> {
    nodes.map(node => {
      if (node.directories) {
        node['expand'] = false;
      }
    });
    return nodes;
  }
}
