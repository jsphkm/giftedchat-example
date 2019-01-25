import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './components/Main';
import Chat from './components/Chat';

const RootStack = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const App = createAppContainer(RootStack);

export default App;
