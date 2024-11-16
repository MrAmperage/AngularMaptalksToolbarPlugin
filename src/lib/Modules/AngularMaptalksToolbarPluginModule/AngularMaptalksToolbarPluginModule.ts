import { NgModule } from "@angular/core";
import { AngularMaptalksPanelModule } from "angular-maptalks";
import AngularMaptalksToolbarPluginComponent from "./Components/AngularMaptalksPluginComponent/AngularMaptalksToolbarPluginComponent";
@NgModule({
  declarations: [AngularMaptalksToolbarPluginComponent],
  imports: [AngularMaptalksPanelModule],
  exports: [AngularMaptalksToolbarPluginComponent],
})
export default class AngularMaptalksToolbarPluginModule {}
