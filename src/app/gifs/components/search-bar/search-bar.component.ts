import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-bar',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..." >
  `,
})
export class SearchBarComponent {
  constructor() {}
}
