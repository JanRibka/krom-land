import ImageDTO from "shared/models/ImageDTO";

export default interface GalleryDTO {
  Id: number | null;
  Title: string | null;
  Description: string | null;
  MainImagePath: string | null;
  MainImageAlt: string | null;
  Images: ImageDTO[];
}
