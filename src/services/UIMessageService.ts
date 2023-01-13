export class UIMessageService {
    public static InfoMessage(msg: string) {
        window.UI.InfoMessage(msg);
    }

    public static SuccessMessage(msg: string) {
        window.UI.SuccessMessage(msg);
    }

    public static ErrorMessage(msg: string) {
        window.UI.ErrorMessage(msg);
    }
}