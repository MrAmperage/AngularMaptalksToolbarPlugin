import { Component, Input } from "@angular/core";

@Component({
  selector: "AngularMaptalksPluginComponent",
  templateUrl: "./AngularMaptalksPluginComponent.html",
})
export default class AngularMaptalksPluginComponent {
  @Input()
  BackgroundColor: string = "#002140";
  IconColor: string = "#ffffff";
}
