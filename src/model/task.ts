export class TaskData {
  name: string;
  createdTime: Date;
  lastUpdatedTime: Date;
  assignedTime: Date;
  overallTime: string;
  remainTime: string;
}

export class TaskHistory {
  taskId: string; // can be changed to us number, but all dependes what stores the data
  updatedTime: Date;
  updateContent: string; // can be json string
}
