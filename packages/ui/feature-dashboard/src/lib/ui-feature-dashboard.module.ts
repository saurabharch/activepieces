import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { UiCommonModule } from '@activepieces/ui/common';
import { SidenavRoutesListComponent } from './components/sidenav-routes-list/sidenav-routes-list.component';
import { RunsTableComponent } from './pages/runs-table/runs-table.component';
import { FlowsTableComponent } from './pages/flows-table/flows-table.component';
import { EmptyFlowsTableComponent } from './pages/flows-table/empty-flows-table/empty-flows-table.component';
import { ConnectionsTableComponent } from './pages/connections-table/connections-table.component';
import { RouterModule } from '@angular/router';
import { DashboardLayoutRouting } from './dashboard.routing';
import { FlowsTableTitleComponent } from './pages/flows-table/flows-table-title/flows-table-title.component';
import { FoldersListComponent } from './pages/flows-table/folders-list/folders-list.component';
import { NewFolderDialogComponent } from './components/dialogs/new-folder-dialog/new-folder-dialog.component';
import { FOLDERS_STATE_NAME } from './store/folders/folders.selector';
import { foldersReducer } from './store/folders/folders.reducer';
import { StoreModule } from '@ngrx/store';
import { MoveFlowToFolderDialogComponent } from './components/dialogs/move-flow-to-folder-dialog/move-flow-to-folder-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { FoldersEffects } from './store/folders/folders.effects';
import { RenameFolderDialogComponent } from './components/dialogs/rename-folder-dialog/rename-folder-dialog.component';
import { EeBillingUiModule } from '@activepieces/ee-billing-ui';
import { UiFeatureTemplatesModule } from '@activepieces/ui/feature-templates';
import { UiFeaturePiecesModule } from '@activepieces/ui/feature-pieces';
import { SyncProjectComponent } from './pages/sync-project/sync-project.component';
import { ProjectSwitcherComponent } from './components/project-switcher/project-switcher.component';
import { TriggerTooltipPipe } from './pipes/trigger-tooltip.pipe';
import { TriggerIconPipe } from './pipes/trigger-icon.pipe';
import { FlowStatusPipe } from './pipes/flow-status-tooltip.pipe';
import { EeComponentsModule } from '@activepieces/ee-components';
import { RenameFlowDialogComponent } from './components/dialogs/rename-flow-dialog/rename-flow-dialog.component';
import { UiFeatureGitSyncModule } from '@activepieces/ui-feature-git-sync';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule,
    EeBillingUiModule,
    RouterModule.forChild(DashboardLayoutRouting),
    StoreModule.forFeature(FOLDERS_STATE_NAME, foldersReducer),
    EffectsModule.forFeature([FoldersEffects]),
    UiFeatureTemplatesModule,
    UiFeaturePiecesModule,
    TriggerTooltipPipe,
    TriggerIconPipe,
    FlowStatusPipe,
    EeComponentsModule,
    UiFeatureGitSyncModule,
  ],
  declarations: [
    DashboardContainerComponent,
    SidenavRoutesListComponent,
    RunsTableComponent,
    FlowsTableComponent,
    EmptyFlowsTableComponent,
    ConnectionsTableComponent,
    FlowsTableTitleComponent,
    FoldersListComponent,
    NewFolderDialogComponent,
    MoveFlowToFolderDialogComponent,
    RenameFolderDialogComponent,
    SyncProjectComponent,
    ProjectSwitcherComponent,
    RenameFlowDialogComponent,
  ],
})
export class UiFeatureDashboardModule {}
