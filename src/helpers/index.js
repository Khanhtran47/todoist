import { collatedTasks } from '../constants/index';

export const CollectionTasksExist = (selectedProject) => {
  collatedTasksExist.find((task) => task.key === selectedProject);
};
