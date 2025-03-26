import ImagePreview from "../preview/ImagePreview";
import {IPreviewStrategy} from "./IPreviewStrategy";

export class ImagePreviewStrategy implements IPreviewStrategy {
    supports(contentType: string): boolean {
        return contentType.startsWith("image/");
    }

    render(_data: string, url: string): React.ReactNode {
        return <ImagePreview url={url}/>;
    }
}
