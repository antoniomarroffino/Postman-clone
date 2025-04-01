import {FileContext} from "../contexts/FileContext.tsx";
import React, {useState} from "react";
import ExportedCollection from "../types/model/ExportedCollection.ts";
import {useCollection} from "../hooks/useCollection.ts";
import UnknownRequestDTO from "../types/model/unknown/UnknownRequestDTO.ts";
import UnknownExportedData from "../types/model/unknown/UnknownExportedData.ts";
import UnknownCollection from "../types/model/unknown/UnknownCollection.ts";

export const FileProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                          children,
                                                                      }) => {
    const [isImporting, setIsImporting] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const {addNewCollection} = useCollection();

    const isValidExportedCollection = (
        data: unknown
    ): data is ExportedCollection => {
        if (typeof data !== "object" || data === null) return false;

        const d = data as UnknownExportedData;

        const col = d.collection as UnknownCollection;

        if (typeof col?.id !== "number") return false;
        if (typeof col?.name !== "string") return false;

        if (!Array.isArray(d.requests)) return false;

        return (d.requests as UnknownRequestDTO[]).every((req) => {
            if (typeof req.id !== "string") return false;
            if (typeof req.name !== "string") return false;
            if (typeof req.uri !== "string") return false;
            if (typeof req.method !== "string") return false;
            if (typeof req.body !== "string") return false;
            if (typeof req.collectionId !== "number") return false;

            const headers = req.headers;
            if (
                typeof headers !== "object" ||
                headers === null ||
                Array.isArray(headers)
            )
                return false;

            const headerEntries = Object.entries(headers);
            if (
                !headerEntries.every(
                    ([key, value]) =>
                        typeof key === "string" &&
                        Array.isArray(value) &&
                        value.every((item) => typeof item === "string")
                )
            )
                return false;

            const validMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
            return validMethods.includes(req.method.toUpperCase());
        });
    };

    const handleExport = (data: ExportedCollection) => {
        if (!data || !data.collection || !data.requests) return;
        setIsExporting(true);
        setError(null);
        try {
            const blob = new Blob([JSON.stringify(data, null, 2)], {
                type: "application/json",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${sanitizeFileName(
                data.collection.name
            )}_${Date.now()}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (err) {
            setError(err);
        } finally {
            setIsExporting(false);
        }
    };

    const handleImport = async (file: File) => {
        setIsImporting(true);
        setError(null);


        try {
            if (file.type !== "application/json") {
                console.error("Invalid file format. Only JSON files are allowed.");
            }
            const reader = new FileReader();
            const content = await new Promise<string>((resolve, reject) => {
                reader.onload = (e) => resolve(e.target?.result as string);
                reader.onerror = () => reject(new Error("Error reading file"));
                reader.readAsText(file);
            });

            const data = JSON.parse(content);
            if (!isValidExportedCollection(data)) {
                console.error("Invalid file structure");
            }

            data.collection.name = sanitizeFileName(data.collection.name);

            addNewCollection(data.collection);
        } catch (err) {
            setError(err);
            console.error(err);
        } finally {
            setIsImporting(false);
        }
    };

    const sanitizeFileName = (name: string): string =>
        name.replace(/[^\w\s]/gi, "_").replace(/\s+/g, "_");

    const value = {
        exportCollection: handleExport,
        importCollection: handleImport,
        isImporting,
        isExporting,
        error,
    };

    return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};
