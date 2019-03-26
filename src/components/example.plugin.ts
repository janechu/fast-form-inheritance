import { FormPlugin, FormPluginProps } from "@microsoft/fast-tooling-react";

export default class ExampleFormPlugin extends FormPlugin<FormPluginProps> {
    public resolver(schema: any, data: any): any {
        console.log("schema", schema);
        let schemaChildrenModifier: any = {};

        switch (data.identifier) {
            case "foo":
                schemaChildrenModifier = {
                    oneOf: [
                        {
                            type: "object",
                            properties: {
                                one: {
                                    title: "One",
                                    type: "string",
                                    enum: ["one"]
                                },
                                two: {
                                    title: "two",
                                    type: "string",
                                    enum: ["two"]
                                },
                                three: {
                                    title: "Optional extra",
                                    type: "string"
                                }
                            },
                            required: [
                                "one",
                                "two"
                            ]
                        },
                        {
                            type: "object",
                            properties: {
                                a: {
                                    title: "A",
                                    type: "string",
                                    enum: ["a"]
                                },
                                b: {
                                    title: "B",
                                    type: "string",
                                    enum: ["b"]
                                },
                                c: {
                                    title: "C",
                                    type: "string"
                                }
                            },
                            required: [
                                "a",
                                "b"
                            ]
                        }
                    ]
                };
                break;
            case "bar":
                schemaChildrenModifier = {
                    oneOf: [
                        {
                            type: "object",
                            properties: {
                                uno: {
                                    title: "One",
                                    type: "string",
                                    enum: ["one"]
                                },
                                dos: {
                                    title: "two",
                                    type: "string",
                                    enum: ["two"]
                                },
                                tres: {
                                    title: "Optional extra",
                                    type: "string"
                                }
                            },
                            required: [
                                "uno",
                                "dos"
                            ]
                        }
                    ]
                };
                break;
            case "bat":
                schemaChildrenModifier = {
                    oneOf: [
                        {
                            type: "object",
                            properties: {
                                foo: {
                                    title: "Foo",
                                    type: "string",
                                    enum: ["foo"]
                                },
                            },
                            required: [
                                "foo"
                            ]
                        }
                    ]
                };
                break;
        }

        return Object.assign({}, schema, schemaChildrenModifier);
    }
}
