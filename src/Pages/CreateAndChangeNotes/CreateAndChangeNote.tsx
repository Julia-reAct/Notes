import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    title: string;
    text: string;
}

function CreateAndChangeNote() {
    const isNewNote = false;

        return (
            <div>
                <h1>{isNewNote ? 'Change note' : 'Create Note'}</h1>
                <Formik
                    initialValues={{
                        title: "",
                        text: "",
                    }}
                    onSubmit={(
                        values: Values,
                        {setSubmitting}: FormikHelpers<Values>
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <label htmlFor='title'>Title</label>
                        <Field id='title' name='title' required={isNewNote ? 'time' : ''} />

                        <label htmlFor='text'>Text</label>
                        <Field id='text' name='text' required={isNewNote ? 'take' : ''} />
                        <button type='submit'>Submit</button>
                    </Form>
                </Formik>
                {isNewNote && <button type='submit'>Return</button>}
            </div>
        );

}

export default CreateAndChangeNote;