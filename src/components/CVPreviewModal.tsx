import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Code, PenTool } from "lucide-react";
import { useEffect, useState } from "react";

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVPreviewModal({ isOpen, onClose }: CVPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<"engineering" | "writing">("engineering");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const cvUrl = activeTab === "engineering" 
    ? "/Victor_Zion_Backend_AI.pdf" 
    : "/Victor_Zion_Technical_Writing.pdf";

  const title = activeTab === "engineering"
    ? "Backend/AI Engineer Resume"
    : "Technical Writer Resume";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-full max-h-[85vh] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-border bg-muted/30 gap-4">
              
              {/* Tabs */}
              <div className="flex items-center gap-2 p-1 bg-background/50 rounded-lg border border-border/50">
                <button
                  onClick={() => setActiveTab("engineering")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "engineering" 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Code size={16} />
                  Backend / AI
                </button>
                <button
                  onClick={() => setActiveTab("writing")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "writing" 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <PenTool size={16} />
                  Technical Writing
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3">
                <a
                  href={cvUrl}
                  download
                  className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors shadow-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={16} />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                  aria-label="Close preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Viewer Content */}
            <div className="flex-1 w-full bg-muted/20 relative">
              <iframe
                key={cvUrl}
                src={`${cvUrl}#toolbar=0`}
                className="absolute inset-0 w-full h-full border-0 rounded-b-xl bg-background"
                title={title}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
