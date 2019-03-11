import * as React from 'react';
import Form from "./form-generator";
import * as exampleSchema from "./components/example.schema.json";
import ExampleFormPlugin from './components/example.plugin';
import ExampleIdentifierFormPlugin from "./components/example-identifier.plugin";

export interface AppState {
    schema: any;
    data: any;
    dataLocation: string;
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            schema: exampleSchema,
            data: {},
            dataLocation: ""
        }
    }

    public render(): React.ReactNode {
        return (
            <div>
                <Form
                    schema={this.state.schema}
                    data={this.state.data}
                    onChange={this.handleDataOnChange}
                    onSchemaChange={this.handleSchemaOnChange}
                    location={{onChange: this.handleDataLocationUpdate, dataLocation: this.state.dataLocation}}
                    plugins={[new ExampleFormPlugin({id: "example/children"}), new ExampleIdentifierFormPlugin({id: "example/identifier"})]}
                />
                <pre>
                    {JSON.stringify(this.state.data, null, 2)}
                </pre>
            </div>
        );
    }

    private handleDataOnChange = (data: any): void => {
        this.setState({
            data
        });
    }

    private handleSchemaOnChange = (schema: any): void => {
        this.setState({
            schema
        });
    }

    private handleDataLocationUpdate = (dataLocation: string): void => {
        this.setState({
            dataLocation
        });
    }
}

export default App;
