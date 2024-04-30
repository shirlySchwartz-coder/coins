import './Register.css';
import { useForm, SubmitHandler } from "react-hook-form"

type formInputs = {
  userName: String;
  userPassword: String;
  userAddress: String;
  userCity: String;
  userLocation: String;
  userAge: number;
};

function Register(): JSX.Element {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();

  const onSubmit: SubmitHandler<formInputs> = (data) => {
    //we can do whatever we like, for now we will print the result
    //on the next step, we will transfer our data to the backend....
    console.log(data);
  };

  console.log(watch("userName")); //watch the user name value when passing data into it
  //study case:

  return (
    <div className="Login Box">
      <h2>Login form</h2>
      <hr />
      {/* handle submit, will check that there is no errors when submitting the form*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register our input to our useForm hook */}
        <input
          type="text"
          placeholder="User name..."
          {...register("userName", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        /><br/>
        {errors.userName?.type=="required" && (
          <span className="ErrorText"> Name is required</span>
        )}
        {errors.userName?.type=="minLength" &&  (
          <span className="ErrorText"> minimum Length : 8</span>
        )}
         {errors.userName?.type=="maxLength" &&  (
          <span className="ErrorText"> maximum Length : 18</span>
        )}
       
        {/* register our input and validate it before sending, display an error, if there is any validation violation"*/}
        <input
          type="password"
          placeholder="User password..."
          {...register("userPassword", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />
       
        {errors.userPassword?.type=="required" && (
          <span className="ErrorText"> Password is required </span>
        )}
        {errors.userPassword?.type=="minLength" &&  (
          <span className="ErrorText"> Minimum Length : 8 </span>
        )}
         {errors.userPassword?.type=="maxLength" &&  (
          <span className="ErrorText"> Maximum Length : 18</span>
        )}
        <br />
        <input
          type="text"
          placeholder="user address..."
          {...register("userAddress", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />
        <br />
        <input
          type="text"
          placeholder="user Location..."
          {...register("userLocation", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />
        <br />
        <input
          type="text"
          placeholder="user age..."
          {...register("userAge", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />
        {/* we need to display an error if there is an error, don't display if all is ok"*/}
        
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Register;

