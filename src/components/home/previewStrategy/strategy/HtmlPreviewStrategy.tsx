import HtmlPreview from "../preview/HtmlPreview";
import {IPreviewStrategy} from "./IPreviewStrategy";

export class HtmlPreviewStrategy implements IPreviewStrategy {
    supports(contentType: string): boolean {
        return contentType.includes("text/html");
    }

    render(data: any): React.ReactNode {
        return <HtmlPreview data={data}/>;
    }
}
