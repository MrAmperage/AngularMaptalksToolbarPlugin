import { Component, Input, OnInit } from "@angular/core";
import { MapService } from "angular-maptalks";

@Component({
  selector: "AngularMaptalksToolbarPluginComponent",
  templateUrl: "./AngularMaptalksToolbarPluginComponent.html",
})
export default class AngularMaptalksToolbarPluginComponent implements OnInit {
  constructor(MapService: MapService) {}
  @Input()
  BackgroundColor: string = "#002140";
  @Input()
  IconColor: string = "#ffffff";
  InitPlugin() {}

  ngOnInit(): void {
    this.InitPlugin();
  }
}
