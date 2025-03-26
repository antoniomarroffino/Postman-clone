import {getContentType} from "../../../../utils/contentTypeUtils";
import {DefaultPreview} from "../preview/DefaultPreview";
import {IPreviewStrategy} from "./IPreviewStrategy";

export class DefaultPreviewStrategy implements IPreviewStrategy {
    supports(): boolean {
        return true;
    }

    render(
        _data: string,
        _url: string,
        headers: Record<string, string>
    ): React.ReactNode {
        return <DefaultPreview contentType={getContentType(headers)}/>;
    }
}
