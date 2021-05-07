import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="ad18867e-3abb-47ce-a980-db70f348d39e"
            userName="jagadishpatil"
            userSecret="jp321"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
         />        
    );
}
   
export default App;