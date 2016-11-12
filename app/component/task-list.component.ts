import { Component, Input, Output } from '@angular/core';

import { Task } from './task';
import { TaskItemComponent } from './task-item.component';

@Component({
    selector: '[task-list]',
    templateUrl: './app/template/task-list.html'
})

export class TaskListComponent {
    @Input() tasks: Task[];
    onTaskDeleted(task : Task) {
        if (task) {
            let index = this.tasks.indexOf(task);
            if (index > -1) {
                this.tasks.splice(index, 1);
            }
        }
    }
}