import React from "react";

const HtmlPreview: React.FC<{ data: string }> = ({data}) => (
    <div
        className="html-preview h-full w-full bg-base-100 rounded-lg overflow-hidden border border-base-300 flex flex-col">
        <iframe
            srcDoc={data}
            className="w-full h-full flex-1 border-none bg-white"
            title="HTML Preview"
            sandbox="allow-scripts allow-same-origin"
        />
    </div>
);

export default HtmlPreview;
