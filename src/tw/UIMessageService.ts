export enum UIMessageType {
    Info,
    Success,
    Error
}

export class UIMessageService {
    public static showInfoMessage(msg: string) {
        this.showMessage(msg, UIMessageType.Info);
    }

    public static showSuccessMessage(msg: string) {
        this.showMessage(msg, UIMessageType.Success);
    }

    public static showErrorMessage(msg: string) {
        this.showMessage(msg, UIMessageType.Error);
    }

    public static showMessage(msg: string, messageType: UIMessageType) {
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