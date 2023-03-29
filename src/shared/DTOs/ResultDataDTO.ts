export default interface ResultDataDTO<T> {
  ErrMsg: string;
  Success: boolean;
  Data?: T | null;
}
