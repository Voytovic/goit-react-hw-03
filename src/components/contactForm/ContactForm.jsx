import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const telId = useId();

  const initialValues = { name: '', tel: '' };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    tel: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css['form']}>
          <div className={css['form-cont']}>
            <div className={css['input-cont']}>
              <label htmlFor="nameId" className={css['form-label']}>
                Name
              </label>
              <Field
                name="name"
                type="text"
                id={nameId}
                className={css['input-form']}
              />
              <ErrorMessage name="name" as="span" />
            </div>

            <div className={css['input-cont']}>
              <label htmlFor="telId" className={css['form-label']}>
                Number
              </label>
              <Field
                name="tel"
                type="tel"
                id={telId}
                className={css['input-form']}
              />
              <ErrorMessage name="tel" as="span" />
            </div>
          </div>
          <button type="submit" className={css['button-form']}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
