import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './Contact.module.css';

const Contact = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required')
      .min(2, 'First name must be at least 2 characters'),
    lastName: Yup.string()
      .required('Last name is required')
      .min(2, 'Last name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string()
      .required('Subject is required')
      .min(5, 'Subject must be at least 5 characters'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters')
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted:', values);
    // Here you would typically send the data to your backend
    alert('Message sent successfully!');
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={style.contactContainer}>
      <div className={style.contactGrid}>
        {/* Contact Form */}
        <div className={style.formCard}>
          <div className={style.formHeader}>
            <i className="fa-solid fa-paper-plane"></i>
            <h2>Send us a Message</h2>
          </div>
          
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className={style.form}>
                <div className={style.formRow}>
                  <div className={style.formGroup}>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      className={`${style.input} ${errors.firstName && touched.firstName ? style.inputError : ''}`}
                    />
                    <ErrorMessage name="firstName" component="div" className={style.errorMessage} />
                  </div>
                  
                  <div className={style.formGroup}>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      className={`${style.input} ${errors.lastName && touched.lastName ? style.inputError : ''}`}
                    />
                    <ErrorMessage name="lastName" component="div" className={style.errorMessage} />
                  </div>
                </div>

                <div className={style.formGroup}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className={`${style.input} ${errors.email && touched.email ? style.inputError : ''}`}
                  />
                  <ErrorMessage name="email" component="div" className={style.errorMessage} />
                </div>

                <div className={style.formGroup}>
                  <Field
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    className={`${style.input} ${errors.subject && touched.subject ? style.inputError : ''}`}
                  />
                  <ErrorMessage name="subject" component="div" className={style.errorMessage} />
                </div>

                <div className={style.formGroup}>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Tell us more about your question or feedback..."
                    className={`${style.textarea} ${errors.message && touched.message ? style.inputError : ''}`}
                    rows="4"
                  />
                  <ErrorMessage name="message" component="div" className={style.errorMessage} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={style.submitButton}
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Contact Information */}
        <div className={style.infoCard}>
          <h2>Contact Information</h2>
          <div className={style.contactInfo}>
            <div className={style.contactItem}>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <strong>Email Us</strong>
                <p>hello@recipeapp.com</p>
                <small>Send us an email anytime.</small>
              </div>
            </div>

            <div className={style.contactItem}>
              <i className="fa-solid fa-phone"></i>
              <div>
                <strong>Call Us</strong>
                <p>+1 (555) 123-4567</p>
                <small>Mon-Fri from 8am to 6pm.</small>
              </div>
            </div>

            <div className={style.contactItem}>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <strong>Visit Us</strong>
                <p>123 Culinary Street, Food City, FC 12345</p>
                <small>Our headquarters.</small>
              </div>
            </div>

            <div className={style.contactItem}>
              <i className="fa-solid fa-clock"></i>
              <div>
                <strong>Business Hours</strong>
                <p>Mon-Fri: 8am-6pm PST</p>
                <small>We're here to help.</small>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={style.faqCard}>
          <h2>Frequently Asked Questions</h2>
          <div className={style.faqList}>
            <div className={style.faqItem}>
              <div className={style.faqQuestion}>
                <i className="fa-solid fa-comment"></i>
                <strong>How do I submit my own recipe?</strong>
              </div>
              <p>Currently, we curate recipes from trusted sources. However, we're working on a feature that will allow community submissions. Stay tuned!</p>
            </div>

            <div className={style.faqItem}>
              <div className={style.faqQuestion}>
                <i className="fa-solid fa-user"></i>
                <strong>Is Recipe App free to use?</strong>
              </div>
              <p>Yes! Recipe App is completely free to use. You can browse, search, and save recipes without any cost.</p>
            </div>

            <div className={style.faqItem}>
              <div className={style.faqQuestion}>
                <i className="fa-solid fa-question"></i>
                <strong>Can I suggest new features?</strong>
              </div>
              <p>Absolutely! We love hearing from our users. Use the contact form below to share your ideas and suggestions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
