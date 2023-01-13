export declare enum UIMessageType {
    Info = 0,
    Success = 1,
    Error = 2
}
export declare class UIMessageService {
    static InfoMessage(msg: string): void;
    static SuccessMessage(msg: string): void;
    static ErrorMessage(msg: string): void;
    static Message(msg: string, messageType: UIMessageType): void;
}
