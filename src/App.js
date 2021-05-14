import { Provider } from "react-redux";
import { store } from "./store";

import Example from "./Example";

const App = () => {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
};

export default App;
