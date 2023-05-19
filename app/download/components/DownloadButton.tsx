'use client';

import React from "react";

interface DownloadButtonProps {
    file: string;
    for: string;
    downloadName?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
    file,
    for: _for,
    downloadName
}) => (
    <a className="bg-neutral-800 px-3 py-4 hover:bg-neutral-700 transition rounded-md" href={file} download={downloadName}>
        Download for {_for}
    </a>
);

export default DownloadButton;
