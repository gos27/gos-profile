import * as Yup from "yup";

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const symbolRegex = /(?=.*[!@#$%^&*])/;

const emailAddresses = ["boladealli27@gmail.com", "boladealli10@gmail.com"];

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Only letters, numbers, and underscores allowed"
    )
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .test("checkUsernameExists", "Username already taken", async (value) => {
      const existingUsernames = ["user123", "john_doe", "bolade_alli"]; // Replace with API call
      return !existingUsernames.includes(value);
    })
    .matches(
      /^(?!.*__.*)(?!^\d)(?!.*\d$).*$/,
      "No consecutive underscores or numbers at start/end"
    )
    .required("Username required"),
  name: Yup.string()
    .trim()
    .min(2, "Minimum of 2 characters required")
    .required("Name required"),
  email: Yup.string()
    .lowercase()
    .email("Enter a valid email")
    .notOneOf(emailAddresses, "Email already taken")
    .required("Email required"),
  dob: Yup.date()
    .required("Date of birth required")
    .nullable()
    .test("age", "You must be at least 18 years old", function (value) {
      return value && new Date().getFullYear() - value.getFullYear() >= 18;
    }),
  radioOptions: Yup.string().required("Radio option required"),
  checkOption: Yup.array()
    .min(1, "At least 1 item required")
    .required("Checkbox required"),
  password: Yup.string()
    .matches(lowerCaseRegex, "One lowercase required")
    .matches(upperCaseRegex, "One uppercase required")
    .matches(numericRegex, "One number required")
    .matches(symbolRegex, "One special character required")
    .min(8, "Password should be at least 8 characters")
    .required("Password required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password required"),
  position: Yup.string().required("Position required"),
  message: Yup.string().required("Message required").min(20),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email").required("Email required"),
  password: Yup.string()
    .matches(/(?=.*[a-z])/, "One lowercase required")
    .matches(/(?=.*[A-Z])/, "One uppercase required")
    .matches(/(?=.*[0-9])/, "One number required")
    .matches(/(?=.*[!@#$%^&*])/, "One special character required")
    .required("Password required"),
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Minimum of 2 characters required")
    .required("Name required"),
  email: Yup.string()
    .lowercase()
    .email("Enter a valid email")
    .notOneOf(emailAddresses, "Email already taken")
    .required("Email required"),
  dob: Yup.date()
    .required("Date of birth required")
    .nullable()
    .test("age", "You must be at least 18 years old", function (value) {
      return value && new Date().getFullYear() - value.getFullYear() >= 18;
    }),
  radioOptions: Yup.string().required("Radio option required"),
  checkOption: Yup.array()
    .min(1, "At least 1 item required")
    .required("Checkbox required"),
  message: Yup.string().required("Message required").min(20),
});
