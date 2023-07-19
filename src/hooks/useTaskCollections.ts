import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuid } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

//example of notes collections
function useTaskCollection() {
    return useLocalStorage<{
      [key in ColumnType]: TaskModel[];
    }>('tasks', {
      Todo: [
        {
          id: uuid(),
          column: ColumnType.TO_DO,
          title: 'Task 1',
          color: 'blue.300',
        },
      ],
      'In Progress': [
        {
          id: uuid(),
          column: ColumnType.IN_PROGRESS,
          title: 'Task 2',
          color: 'yellow.300',
        },
      ],
      Blocked: [
        {
          id: uuid(),
          column: ColumnType.BLOCKED,
          title: 'Task 3',
          color: 'red.300',
        },
      ],
      Completed: [
        {
          id: uuid(),
          column: ColumnType.COMPLETED,
          title: 'Task 4',
          color: 'green.300',
        },
      ],
    });
  }
  
  export default useTaskCollection;