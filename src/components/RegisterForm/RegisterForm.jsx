import { useForm } from "react-hook-form";
import s from "./RegisterForm.module.css";
import { useState } from "react";
import clsx from "clsx";
import { loginUser, registerUser } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ isRegisterVisible, closeRegisterForm, setUser }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await registerUser(data.email, data.password);
    const user = await loginUser(data.email, data.password);
    console.log("User registered:", user);

    localStorage.setItem(
      "user",
      JSON.stringify({ uid: user.uid, email: user.email })
    );
    setUser({ uid: user.uid, email: user.email });
    navigate("/teachers");
    closeRegisterForm();
    reset();
  };
  return (
    <>
      <div className={clsx(s.overlay, isRegisterVisible ? s.overlay_show : "")}>
        <div
          className={clsx(s.wrapper, isRegisterVisible ? s.wrapper_show : "")}
        >
          <div onClick={closeRegisterForm} className={s.close_form}></div>
          <h2 className={s.title}>Registration</h2>
          <p className={s.descr}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Name"
              className={s.input}
              {...register("name")}
            />
            <input
              placeholder="Email"
              className={s.input}
              {...register("email")}
            />
            <div className={s.password_input}>
              <input
                placeholder="Password"
                className={s.input}
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <svg
                onClick={() => setShowPassword(!showPassword)}
                className={s.eye}
                width="20"
                height="20"
              >
                <use href={`/icons/icons.svg#icon-eye`} />
              </svg>
            </div>

            {errors.exampleRequired && <span>This field is required</span>}

            <button className={s.btn} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
