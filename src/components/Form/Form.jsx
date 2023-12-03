import React from 'react';

const Form = () => {
    return (
        <>
            <div className='form'>
                <div className=' form__desc'>
                    <div className=' form__dec-text'>Email Newsletter</div>
                    <div className=' form__desc-subtitle'>
                        Subscribe for updates
                    </div>
                </div>

                <form action='#' className='form__fill'>
                    <input
                        type='text'
                        id='text'
                        className=' form__fill-name'
                        placeholder='Name'
                        required
                    />
                    <input
                        type='email'
                        id='email'
                        className=' form__fill-email'
                        placeholder='Email'
                        required
                    />
                    <button className=' form__fill-button'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Form;
