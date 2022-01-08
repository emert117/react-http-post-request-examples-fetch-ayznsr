import React from 'react';

import { PostRequest, PostRequestHooks, PostRequestAsyncAwait, PostRequestErrorHandling, PostRequestSetHeaders } from './';

class App extends React.Component {
    render() {
        return (
            <div>
                <h4 className="p-3 text-center">Yazılım Atölyesi</h4>
                <PostRequest />                
            </div>
        );
    }
}

export { App }; 