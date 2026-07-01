import { useEffect } from "react";
import LeadForm from "./LeadForm";

const LeadModal = ({ open, onClose }) => {

    useEffect(() => {

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };

    }, [open]);

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

            {/* Overlay */}

            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}

            <div className="relative w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto no-scrollbar">

                {/* Close Button */}

                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xl flex items-center justify-center transition-all duration-300"
                >
                    ✕
                </button>

               <LeadForm
    variant="contact"
    onClose={onClose}
/>

            </div>

        </div>

    );

};

export default LeadModal; 