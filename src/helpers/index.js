import { collatedTasks } from '../constants/index';

export const CollectionTasksExist = (selectedProject) => {
  collatedTasks.find((task) => task.key === selectedProject);
};
