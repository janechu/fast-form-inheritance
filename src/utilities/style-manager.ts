import { SheetsManager } from 'jss';

const manager = new SheetsManager();

class Theme {

    private updateStylesheets() {
        manager.sheets.forEach((sheet) => {
            sheet.update(this);
        });
    }

    private _background = 'blue';
    get background() {
        return this._background;
    }

    set background(value) {
        this._background = value;
        this.updateStylesheets();
    }
}

const theme = new Theme();
export default manager;

export { theme };
