import { createContext } from "react";
import ExportedCollection from "../types/model/ExportedCollection.ts";

type FileContextType = {
  exportCollection: (data: ExportedCollection) => void;
  importCollection: (file: File) => void;
  isImporting: boolean;
  isExporting: boolean;
  error: unknown;
};

export const FileContext = createContext<FileContextType | undefined>(
  undefined
);
