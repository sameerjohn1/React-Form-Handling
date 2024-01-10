import "./App.css";
import { useFormik, Formik, Form, Field } from "formik"; //formic is used for form handling

import { signupValidation } from "./schema/signupValidation";

// yup is used for form validation

const initialValues = {
  //custom hooks for form and manage state and handling events
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
function App() {
  return (
    <div className="App">
      <Formik initialValues={initialValues} validationSchema={signupValidation}>
        {({ errors }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <br />
            <Field type="text" name="name"></Field>
            <br />
            {/* showing errors */}
            {errors.name && <small>{errors.name}</small>}
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <Field type="email" name="email"></Field>

            <br />

            {errors.email && <small>{errors.email}</small>}
            <br />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <Field type="password" name="password"></Field>

            <br />

            {errors.password && <small>{errors.password}</small>}
            <br />
            <br />

            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <Field type="password" name="cpassword"></Field>

            <br />
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
