import * as React from 'react';
import Form from "./form";
import Example from "./components/example";

class App extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <div>
                <Form />
                <Example />
            </div>
        );
    }
}

export default App;
