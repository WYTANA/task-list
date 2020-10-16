import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  getTasks(): void {
    this.taskDataService.getTasks().subscribe(t => (this.tasks = t));
  }

  deleteTask(id: number): void {
    this.taskDataService.deleteTask(id).subscribe(t =>
      this.getTasks()
    );
  }

  constructor(private taskDataService: TaskDataService) { }

  ngOnInit(): void {
    this.getTasks();
  }


}
