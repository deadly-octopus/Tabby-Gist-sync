import { Injectable } from '@angular/core'
import { SyncConfigSettingsTabComponent } from 'components/SettingsTab.component'
import { SettingsTabProvider } from 'terminus-settings'
@Injectable()
export class SyncConfigSettingsTabProvider extends SettingsTabProvider {
    id = 'sync-config'
    icon = 'cloud'
    title = 'Gist config sync'

    getComponentType(): any {
        return SyncConfigSettingsTabComponent;
    }
}