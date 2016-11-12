import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
    selector: '[task-item]',
    templateUrl: './app/template/task-item.html',
    styleUrls: ['./style.css']
})

export class TaskItemComponent {
    @Input() task : Task;    
    @Output() deleted: EventEmitter<Task>;

    constructor() {
        this.deleted = new EventEmitter<Task>();
    }
    delete() {
        this.deleted.emit(this.task);
    }
}