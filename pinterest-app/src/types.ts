export interface Board {
    name: string | number;
    pin: IPin[];
}
export interface IPin {

    id: number | string;
    src: string,
    title: string,
    description: string,

}
export interface BoardsProps {
    boards: Board[]
}
export interface PinsPageStore {
    pins: IPin[],
    filterValue: string,
    loadingPin: boolean,
}
export interface PinSaveOnBoard {
    nameBoard: string;
    pin: IPin
}
export interface BoardPageStore {
    activBoard: string | null,
    loadingPin: boolean,
    boards: Board[]
}