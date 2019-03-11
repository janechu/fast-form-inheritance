import * as React from 'react';

class Example extends React.Component<any, {}> {
    render() {
        return (
            <pre>
                {JSON.stringify(this.props)}
            </pre>
        );
    }
}

export default Example;
