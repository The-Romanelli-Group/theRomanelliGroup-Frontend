import { useEffect } from "react";
import LeadForm from "./LeadForm";

const LeadModal = ({
    open,
    onClose,
    variant = "contact",
    property = null,
}) => {

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

    <div className="
fixed
inset-0
z-[9999]
overflow-y-auto
p-5
">

        {/* Overlay */}

        <div
            onClick={onClose}
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
        />

        {/* Modal */}

        <div
            className="
                relative
                w-full
                max-w-md
                max-h-[90vh]
                overflow-y-auto
                no-scrollbar
            "
        >

            <LeadForm
                variant={variant}
                property={property}
                onClose={onClose}
            />

        </div>

    </div>

);

};

export default LeadModal;