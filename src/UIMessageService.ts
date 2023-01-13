export enum UIMessageType {
    Info,
    Success,
    Error
}

export class UIMessageService {
    public static InfoMessage(msg: string) {
        this.Message(msg, UIMessageType.Info);
    }

    public static SuccessMessage(msg: string) {
        this.Message(msg, UIMessageType.Success);
    }

    public static ErrorMessage(msg: string) {
        this.Message(msg, UIMessageType.Error);
    }

    public static Message(msg: string, messageType: UIMessageType) {
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