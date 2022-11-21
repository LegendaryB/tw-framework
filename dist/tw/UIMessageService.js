export var UIMessageType;
(function (UIMessageType) {
    UIMessageType[UIMessageType["Info"] = 0] = "Info";
    UIMessageType[UIMessageType["Success"] = 1] = "Success";
    UIMessageType[UIMessageType["Error"] = 2] = "Error";
})(UIMessageType || (UIMessageType = {}));
export class UIMessageService {
    static showInfoMessage(msg) {
        this.showMessage(msg, UIMessageType.Info);
    }
    static showSuccessMessage(msg) {
        this.showMessage(msg, UIMessageType.Success);
    }
    static showErrorMessage(msg) {
        this.showMessage(msg, UIMessageType.Error);
    }
    static showMessage(msg, messageType) {
        switch (messageType) {
            case UIMessageType.Info:
                window.UI.InfoMessage(msg);
                break;
            case UIMessageType.Success:
                window.UI.SuccessMessage(msg);
                break;
            case UIMessageType.Error:
                window.UI.ErrorMessage(msg);
                break;
        }
    }
}
