import { useForm } from "react-hook-form";
import s from "./TrialForm.module.css";
import clsx from "clsx";

const TrialForm = ({ teacher, isTrialVisible, closeTrialForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    closeTrialForm();
    reset();
  };

  return (
    <>
      <div className={clsx(s.overlay, isTrialVisible ? s.overlay_show : "")}>
        <div className={clsx(s.wrapper, isTrialVisible ? s.wrapper_show : "")}>
          <div onClick={closeTrialForm} className={s.close_form}></div>
          <h2 className={s.title}>Book trial lesson</h2>
          <p className={s.descr}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={s.teacher}>
            <img
              className={s.teacher_img}
              src={teacher.avatar_url}
              alt="teacher"
            />
            <div className={s.teacher_wrapper}>
              <p className={s.teacher_title}>Your teacher</p>
              <p
                className={s.teacher_name}
              >{`${teacher.name} ${teacher.surname}`}</p>
            </div>
          </div>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={s.subtitle}>
              What is your main reason for learning English?
            </h3>
            <div className={s.radio_list}>
              <label>
                <input
                  className={s.radio}
                  type="radio"
                  name="reason"
                  value="career"
                />
                Career and business
              </label>

              <label>
                <input
                  className={s.radio}
                  type="radio"
                  name="reason"
                  value="kids"
                />
                Lesson for kids
              </label>

              <label>
                <input
                  className={s.radio}
                  type="radio"
                  name="reason"
                  value="abroad"
                />
                Living abroad
              </label>

              <label>
                <input
                  className={s.radio}
                  type="radio"
                  name="reason"
                  value="exams"
                />
                Exams and coursework
              </label>

              <label>
                <input
                  className={s.radio}
                  type="radio"
                  name="reason"
                  value="hobby"
                />
                Culture, travel or hobby
              </label>
            </div>
            <input
              placeholder="Full Name"
              className={s.input}
              {...register("name")}
            />
            <input
              placeholder="Email"
              className={s.input}
              {...register("email")}
            />
            <input
              placeholder="Phone number"
              className={s.input}
              {...register("phone")}
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <button className={s.btn} type="submit">
              Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TrialForm;
