import React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Button } from "@mui/material"

export default function Login() {


    const validate = values => {
        const errors = {}

        if(!values.email) {
            errors.email = "Required"
        }

        if(!values.password) {
            errors.password = "Required"
        } else if(values.password.length < 3) {
            errors.password = "Must be longer than 3 digits"
        }

        return errors
    }

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: ''
    //     },
    //     validate,
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2))
    //     }
    // })
    // return (
        // <form onSubmit={formik.handleSubmit}>
        //     <label htmlFor="email">Email Address</label>
        //     <input
        //         id="email"
        //         type="email"
        //         {...formik.getFieldProps('email')}
        //     />
        //     {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
        //     <br/>
        //     <label htmlFor="password">Password</label>
        //     <input
        //         id="password"
        //         type="password"
        //         {...formik.getFieldProps('password')}
        //     />
        //     {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
        //     <button type="submit">Submit</button>
        // </form>
    // )

    return (
        <Formik
            initialValues={{email: '', password:''}}
            validate={validate}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2))
            }}
        >
            <Form>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
                <br/>
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </Form>
        </Formik>
    )




}