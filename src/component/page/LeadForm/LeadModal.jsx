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

            <div className="relative w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">

                    <button
            onClick={onClose}
            className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all duration-300"
        >
            ✕
        </button>

                <LeadForm variant="contact" />

            </div>

        </div>

    );

};

export default LeadModal;