import LeadForm from "../page/LeadForm/LeadForm";

const LeadModal = ({ open, onClose }) => {

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

            {/* Overlay */}

            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}

            <div className="relative w-full max-w-lg mx-4">

                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white text-3xl hover:opacity-80"
                >
                    ×
                </button>

                <LeadForm variant="contact" />

            </div>

        </div>

    );

};

export default LeadModal;