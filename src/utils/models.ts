import { ColumnType } from "./enums";
//interface para los parametros de la nota
export interface TaskModel{
    id: string;
    title: string;
    column: ColumnType;
    color: string;
}
//Drag note
export interface DragItem {
    index: number;
    id: TaskModel['id'];
    from: ColumnType;
  }