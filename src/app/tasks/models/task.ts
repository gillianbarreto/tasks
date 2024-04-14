export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    userId: number;
}

export interface TaskResponse {
    tasks: Task[];
}