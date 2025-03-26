import {FaCode, FaExclamationTriangle} from "react-icons/fa";
import type {ReactNode} from "react";

export const DefaultPreview: React.FC<{ contentType?: string }> = ({
                                                                       contentType,
                                                                   }): ReactNode => (
    <div className="h-full w-full flex items-center justify-center p-8">
        <div className="max-w-md flex flex-col items-center text-center gap-4">
            <div className="text-6xl text-warning">
                <FaExclamationTriangle/>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-bold">Preview non disponibile</h2>

                <div className="text-sm text-base-content/80 leading-relaxed">
                    <p>
                        Non possiamo mostrare un'anteprima per il tipo di contenuto:{" "}
                        <code className="px-2 py-1 bg-base-300 rounded-md">
                            {contentType || "sconosciuto"}
                        </code>
                    </p>

                    <p className="mt-2">
                        Puoi utilizzare la visualizzazione Raw per esplorare i dati
                        direttamente.
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-sm text-info">
                <FaCode className="flex-shrink-0"/>
                <span>Prova a cambiare la visualizzazione in "Raw"</span>
            </div>
        </div>
    </div>
);
