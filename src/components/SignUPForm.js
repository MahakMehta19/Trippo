import "./SignUpForm.css";

function SignUpForm() {
  return (
    <div className=" form-container">
      <h1>Register for incredible travel experience!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rowss="4"></textarea>
        <button>Register</button>
      </form>
    </div>
  );
}

export default SignUpForm;
