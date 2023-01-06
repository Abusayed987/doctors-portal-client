import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        if (!name || !phone || !email) {
            return
        }

        const booking = {
            appointmentDate: date,
            // treatment: treatment.name,
            treatment: name, // maybe Wrong.. 
            patient: name,
            slot,
            email,
            phone,
        }
        // TODO: send data to server 
        // and once data is saved then closed the modal
        // display toast
        console.log(booking);
        setTreatment(null)

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-11 w-11/12 mx-auto'>
                        <input type="text" placeholder="Type here"
                            defaultValue={date}
                            className="input input-bordered w-full border-none bg-gray-200   input-accent" readOnly />

                        <select name='slot' className="select select-bordered border-none bg-gray-200  input-accent w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                //value for get value
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-accent w-full " />

                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-accent w-full " />

                        <input name='email' type="email" placeholder="Email" className="input input-bordered input-accent w-full " />

                        <input className='btn  w-full mt-3' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;