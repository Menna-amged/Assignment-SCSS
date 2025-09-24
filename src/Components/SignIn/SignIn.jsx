import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import style from './SignIn.module.css';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Sign in submitted:', values);
    // Here you would typically authenticate the user
    alert('Sign in successful!');
    resetForm();
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.authContainer}>
      <div className={style.authCard}>
        <div className={style.authHeader}>
          <h1>Welcome back</h1>
        </div>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={style.form}>
              <div className={style.formGroup}>
                <label htmlFor="email" className={style.label}>
                  Email address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`${style.input} ${errors.email && touched.email ? style.inputError : ''}`}
                />
                <ErrorMessage name="email" component="div" className={style.errorMessage} />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="password" className={style.label}>
                  Password
                </label>
                <div className={style.passwordContainer}>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className={`${style.input} ${style.passwordInput} ${errors.password && touched.password ? style.inputError : ''}`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={style.passwordToggle}
                  >
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className={style.errorMessage} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={style.submitButton}
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>

        <div className={style.authFooter}>
          <p>Don't have an account?</p>
          <Link to="/signup" className={style.authLink}>
            Create new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
