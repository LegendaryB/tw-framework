export interface UI {
    InfoMessage(msg: string): void;
    SuccessMessage(msg: string): void;
    ErrorMessage(msg: string): void;
}