/* eslint-disable react/prop-types */
import TTTabs from './TTTabs';

function Content({ contents }) {
  return <TTTabs className="tabs" items={contents} tabPosition="top" />;
}

export default Content;
