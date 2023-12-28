import TabsContent from './TabsContent';
import TabsList from './TabsList';
import TabsRoot from './TabsRoot';
import TabsTrigger from './TabsTrigger';

const List = TabsList;
const Trigger = TabsTrigger;
const Content = TabsContent;

const Tabs = Object.assign(TabsRoot, {
  List,
  Trigger,
  Content,
});

export default Tabs;
