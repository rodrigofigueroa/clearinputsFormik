import React from 'react';
import './Form.sass'
import {Formik} from 'formik';
import * as Yup from 'yup';

class Form extends React.Component{
    render(){
        return(
            <section className="form-style">
                <h2>Example Clear Inputs with Formik</h2>
                <Formik 
                    initialValues={{FirstName: '', FirstNumber: ''}}
                    validationSchema={Yup.object({
                        FirstName: Yup.string(),
                        FirstNumber: Yup.number()
                    })}
                    onSubmit={(values , {resetForm} ) => {    
                        console.log(values);
                        resetForm({ values: ''});
                    }}>
                    {
                        formik => (
                            <form onSubmit={formik.handleSubmit}>
                                <label htmlFor="FirstName">Name</label>
                                    <input 
                                        type="text"
                                        id="FirstName"
                                        onChange={formik.handleChange}
                                        value={formik.values.FirstName}
                                    ></input>
                                <label htmlFor="FirstNumber">Number</label>
                                    <input 
                                        type="text"
                                        id="FirstNumber"
                                        onChange={formik.handleChange}
                                        value={formik.values.FirstNumber}
                                        ></input>
                                <input type="submit" value="Send"></input>
                            </form>
                        )
                    }
                </Formik>
            </section>
        )
    }
}

export default Form;