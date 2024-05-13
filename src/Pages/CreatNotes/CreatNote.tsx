import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    title: string;
    text: string;
}

function CreatNote() {
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    title: "",
                    text: "",
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Title" />

                    <label htmlFor="text">Text</label>
                    <Field id="text" name="text" placeholder="Text" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>

);
}

export default CreatNote;