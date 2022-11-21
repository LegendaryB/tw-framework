export declare enum UIMessageType {
    Info = 0,
    Success = 1,
    Error = 2
}
export declare class UIMessageService {
    static showInfoMessage(msg: string): void;
    static showSuccessMessage(msg: string): void;
    static showErrorMessage(msg: string): void;
    static showMessage(msg: string, messageType: UIMessageType): void;
}
