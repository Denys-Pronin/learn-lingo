import { useForm } from "react-hook-form";
import s from "./LoginForm.module.css";
import { useState } from "react";
import clsx from "clsx";
import { loginUser } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ isLoginVisible, closeLoginForm, setUser }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = await loginUser(data.email, data.password);
    console.log("User logined:", user);

    localStorage.setItem(
      "user",
      JSON.stringify({ uid: user.uid, email: user.email })
    );
    setUser({ uid: user.uid, email: user.email });
    navigate("/teachers");
    closeLoginForm();
    reset();
  };
  return (
    <>
      <div className={clsx(s.overlay, isLoginVisible ? s.overlay_show : "")}>
        <div className={clsx(s.wrapper, isLoginVisible ? s.wrapper_show : "")}>
          <div onClick={closeLoginForm} className={s.close_form}></div>
          <h2 className={s.title}>Log In</h2>
          <p className={s.descr}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
