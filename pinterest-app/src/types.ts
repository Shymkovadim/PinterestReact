export interface Board {
    name: string | number;
    pinsId: (string | number)[];
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
    boards: Board[];
}