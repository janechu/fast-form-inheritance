import { FormPlugin, FormPluginProps } from "@microsoft/fast-tooling-react";
import { clone } from "lodash-es";
import inheritedData from "../inherited-data";

export default class ExampleIdentifierFormPlugin extends FormPlugin<FormPluginProps> {
    public resolver(schema: any, data: any): any {
        const updatedSchema: any = clone(schema);

        if (typeof data.inheritedProperty === "undefined") {
            return Object.assign(
                {},
                updatedSchema,
                {
                    default: inheritedData.inheritedProperty,
                    badge: "info",
                    badgeDescription: `This property is inherited as ${inheritedData.inheritedProperty}`
                }
            );
        }

        delete updatedSchema.default;
        delete updatedSchema.badge;
        delete updatedSchema.badgeDescription;

        return updatedSchema;
    }
}
