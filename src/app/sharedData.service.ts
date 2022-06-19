import {BehaviorSubject, Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() {
  }

  //Using any
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private source = new BehaviorSubject(this.editDataDetails);
  currentSource = this.source.asObservable();

  changeSource(sources: any) {
    this.source.next(sources)
  }
}
