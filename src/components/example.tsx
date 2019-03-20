import * as React from 'react';

interface ExampleState {
    props: any;
}

class Example extends React.Component<any, ExampleState> {
    constructor(props) {
        super(props);

        this.state = {
            props: this.props
        }
    }

    componentDidMount() {
        window.addEventListener("message", this.handlePostMessage);
    }

    render() {
        return (
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        );
    }

    handlePostMessage = (message: any) => {
        try {
            const parsedData: JSON = JSON.parse(message.data);

            this.setState({
                props: parsedData
            });
        } catch(e) {}
    }
}

export default Example;
