import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

}
export class AppComponent {
  title: string = 'My first AGM project';
  zoom: number = 8;
  lat: number = 4.662387;
  lng: number =  -74.069037;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat:  4.662387,
		  lng: -74.069037,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat:  4.662387,
		  lng: -74.069037,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat:  4.662387,
		  lng: -74.069037,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
