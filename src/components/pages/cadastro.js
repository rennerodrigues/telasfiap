import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Cadastro() {
    return (
        <form>
            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput id='form6Example1' label='First name' />
                </MDBCol>
                <MDBCol>
                    <MDBInput id='form6Example2' label='Last name' />
                </MDBCol>
            </MDBRow>

            <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
            <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
            <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
            <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

            <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

            <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form6Example8'
                label='Create an account?'
                defaultChecked
            />

            <MDBBtn className='mb-4' type='submit' block>
                Place order
            </MDBBtn>

            {/* PLUGIN PARA FACE,GIT... */}
            <div className='text-center'>
                <p>
                    Not a member? <a href='#!'>Register</a>
                </p>
                <p>or sign up with:</p>

                <MDBBtn floating className='mx-1'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating className='mx-1'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn floating className='mx-1'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn floating className='mx-1'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
            </div>
        </form>
    );
}
