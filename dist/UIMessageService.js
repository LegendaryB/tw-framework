export var UIMessageType;
(function (UIMessageType) {
    UIMessageType[UIMessageType["Info"] = 0] = "Info";
    UIMessageType[UIMessageType["Success"] = 1] = "Success";
    UIMessageType[UIMessageType["Error"] = 2] = "Error";
})(UIMessageType || (UIMessageType = {}));
export class UIMessageService {
    static InfoMessage(msg) {
        this.Message(msg, UIMessageType.Info);
    }
    static SuccessMessage(msg) {
        this.Message(msg, UIMessageType.Success);
    }
    static ErrorMessage(msg) {
        this.Message(msg, UIMessageType.Error);
    }
    static Message(msg, messageType) {
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
