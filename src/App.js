import React from 'react';
import PostForm from './components/postForm';
import Posts from './components/Posts';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  // provider 的作用：就是让包裹在其中的各级组件，共享 store 中的 state
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>我是表头</h1>
        </header>
        <PostForm></PostForm>
        <Posts></Posts>
      </div>
    </Provider>
  );
}

export default App;
