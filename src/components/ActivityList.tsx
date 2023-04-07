/* eslint-disable react/prop-types */
import TTTabs from './TTTabs';

function ActivityList({ activities }) {
  return <TTTabs className="tabs" items={activities} tabPosition="left" />;
}

export default ActivityList;
