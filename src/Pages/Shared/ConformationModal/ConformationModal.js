import React from 'react';

const ConformationModal = ({ tittle, message, closeModal, successAction, modalData, successBtnName }) => {
    return (
        <div>
            <input type="checkbox" id="conformation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{tittle}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="conformation-modal"
                            className="btn-sm btn  btn-error">{successBtnName}</label>

                        <button onClick={closeModal} className='btn btn-sm btn-outline'> Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;