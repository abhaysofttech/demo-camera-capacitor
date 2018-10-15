import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

import {MyComponentComponent} from './my-component/my-component.component';

@NgModule({
    declarations: [
        MyComponentComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        MyComponentComponent
    ]
})
export class ComponentsModule {
}
