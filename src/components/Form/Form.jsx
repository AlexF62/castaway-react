import React from 'react';
import Text from '../UI/Text';
import './form.scss';

const Form = () => {
    return (
        <>
            <div className='form'>
                <div className=' form__desc'>
                    <Text
                        className={'form__dec-text'}
                        text={'Email Newsletter'}
                    />
                    <Text
                        className={'form__desc-subtitle'}
                        children={'Subscribe for updates'}
                    />
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
