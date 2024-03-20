import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({  providedIn: 'root' })
export class GifsService {

  public gifsList: Gif[] = []

  private _tagsHistory: string[] = []
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs'
  private apiKey:       string = 'rndiUgI6fzuZq2PZq6oa1mmQiehUKZhN'

  constructor( private http: HttpClient ) { }

  get tagsHistory() {
    return [...this._tagsHistory]
  }


  private historyOrganized(tag:string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag )
    this._tagsHistory = this.tagsHistory.splice(0,10)

  }

  public searchTag( tag:string ): void {
    this.historyOrganized(tag)

    const params = new HttpParams()
    .set('q', tag)
    .set('limit', '16')
    .set('api_key', this.apiKey)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
    .subscribe( res => {
      this.gifsList = res.data;
    })

  }


}
