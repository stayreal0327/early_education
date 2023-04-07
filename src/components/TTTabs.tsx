/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { Tabs } from 'antd';
import StickyBox from 'react-sticky-box';

function TTTabs({ items, className, tabChange = null, tabPosition }) {
  if(tabPosition === 'bottom') {
    tabPosition = 'top';
  }
  const renderTabBar = (props: any, DefaultTabBar: any) => {
    if (tabPosition === 'left' || tabPosition === 'right') {
      return (
        <StickyBox
          offsetLeft={0}
          offsetRight={0}
          style={{ zIndex: 1, background: 'rgb(45, 45, 45)' }}
        >
          <DefaultTabBar {...props} />
        </StickyBox>
      );
    }
    return (
      <StickyBox
        offsetTop={0}
        offsetBottom={0}
        style={{ zIndex: 1, background: 'rgb(45, 45, 45)' }}
      >
        <DefaultTabBar {...props} />
      </StickyBox>
    );
  };

  return (
    <Tabs
      className={className}
      defaultActiveKey="1"
      renderTabBar={renderTabBar}
      onChange={tabChange}
      items={items}
      tabPosition={tabPosition}
    />
  );
}

export default TTTabs;
