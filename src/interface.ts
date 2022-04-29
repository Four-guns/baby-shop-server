/**
 * @description User-Service parameters
 */
export interface IUserOptions {
    uid: number;
    uname: string;
    pwd: string;
}

export interface IGetUserResponse {
    success: boolean;
    message: string;
    data: IUserOptions;
}
