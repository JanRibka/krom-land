import GalleryImageDTO from "./GalleryImageDTO";

export default interface GalleryDTO {
  Id: number | null;
  Title: string | null;
  Description: string | null;
  PageHeaderTextMain: string | null;
  PageHeaderTextMainColor: string | null;
  MainImage: string | null;
  Images: GalleryImageDTO[];
}
