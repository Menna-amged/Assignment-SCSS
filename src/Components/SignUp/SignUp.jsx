import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import style from './SignUp.module.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full name is required')
      .min(2, 'Full name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    confirmPassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    agreeToTerms: Yup.boolean()
      .oneOf([true], 'You must agree to the terms and conditions')
  });

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Sign up submitted:', values);
    // Here you would typically create the user account
    alert('Account created successfully!');
    resetForm();
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={style.authContainer}>
      <div className={style.authCard}>
        <div className={style.authHeader}>
          <h1>Create your account</h1>
          <p>Join Recipe App to discover amazing recipes</p>
        </div>
        
        <div className={style.signUpSection}>
          <h2>Sign Up</h2>
          <p>Create a new account to get started</p>
        </div>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={style.form}>
              <div className={style.formGroup}>
                <label htmlFor="fullName" className={style.label}>
                  Full name
                </label>
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your full name"
                  className={`${style.input} ${errors.fullName && touched.fullName ? style.inputError : ''}`}
                />
                <ErrorMessage name="fullName" component="div" className={style.errorMessage} />
              </div>

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
                    placeholder="Create a password"
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

              <div className={style.formGroup}>
                <label htmlFor="confirmPassword" className={style.label}>
                  Confirm password
                </label>
                <div className={style.passwordContainer}>
                  <Field
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className={`${style.input} ${style.passwordInput} ${errors.confirmPassword && touched.confirmPassword ? style.inputError : ''}`}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className={style.passwordToggle}
                  >
                    <i className={`fa-solid ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className={style.errorMessage} />
              </div>

              <div className={style.checkboxGroup}>
                <Field
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  className={style.checkbox}
                />
                <label htmlFor="agreeToTerms" className={style.checkboxLabel}>
                  I agree to the{' '}
                  <a href="#" className={style.termsLink}>Terms and Conditions</a>
                  {' '}and{' '}
                  <a href="#" className={style.termsLink}>Privacy Policy</a>
                </label>
                <ErrorMessage name="agreeToTerms" component="div" className={style.errorMessage} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={style.submitButton}
              >
                Create Account
              </button>
            </Form>
          )}
        </Formik>

        <div className={style.authFooter}>
          <p>Already have an account?</p>
          <Link to="/signin" className={style.authLink}>
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
