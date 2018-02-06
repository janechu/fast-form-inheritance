import * as React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { theme } from '../utilities/style-manager';

jss.setup(preset());

const styles = {
    button: {
        background: theme => theme.background 
    }
};

const stylesheet = jss.createStyleSheet(styles, {link: true}).update(theme);

class Example extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <button className={ stylesheet.classes.button }>Hello World</button>
            </div>
        );
    }
}

export default Example;
