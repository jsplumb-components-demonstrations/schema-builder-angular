import {AfterViewInit, Component, ViewChild} from '@angular/core'
import { SchemaComponent } from "@jsplumb-components/schema-angular"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(SchemaComponent) schema!:SchemaComponent;

  title = 'schema-angular'

  ngAfterViewInit(): void {

    this.schema.loadUrl("assets/schema-1.json")
  }



}
