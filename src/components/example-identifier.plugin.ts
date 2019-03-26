import { FormPlugin, FormPluginProps } from "@microsoft/fast-tooling-react";

export default class ExampleIdentifierFormPlugin extends FormPlugin<FormPluginProps> {
    public resolver(schema: any, data: any): any {
        const availableIdentifiers: string[] = [
            "foo",
            "bar",
            "bat"
        ];

        return Object.assign({}, schema, {enum: availableIdentifiers});
    }
}
