import React from "react";

const ImagePreview: React.FC<{ url: string }> = ({url}) => (
    <div className="image-preview">
        <img
            src={`${url}`}
            alt="Response preview"
            className="max-h-96 object-contain"
        />
    </div>
);

export default ImagePreview;
