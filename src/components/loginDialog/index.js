import { h } from "preact";
import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth";
//assets import
import style from "./style.css";
import myITSlogo from "../../assets/logo.png";

const LoginDialog = () => {
  const dispatch = useDispatch();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const onSubmit = (e) => {
    dispatch(login(emailField));
    e.preventDefault();
  };

  return (
    <div
      className={[style.modal, style.fade, style.effect_scale, style.show].join(
        " "
      )}
      id="modalLogin"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{ paddingRight: "15px", display: "block" }}
    >
      <div
        className={[style.modal_dialog, style.modal_dialog_centered].join(" ")}
        role="document"
      >
        <div className={style.modal_content}>
          <div className={style.modal_body} style={{ padding: "30px" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{ marginBottom: "25px", width: "20%" }}
                src={myITSlogo}
                className={style.img_fluid}
                alt=""
              />
            </div>

            <div style={{ display: "flex" }}>
              <div className={style.flex_fill}>
                <div className={style.form_group}>
                  <h5 className={style.form_title}>Email</h5>
                  <input
                    type="email"
                    className={style.form_control}
                    onInput={(e) => setEmailField(e.target.value)}
                  />
                </div>
                <div className={style.form_group}>
                  <h5 className={style.form_title}>Password</h5>
                  <input
                    type="password"
                    className={style.form_control}
                    onInput={(e) => setPasswordField(e.target.value)}
                  />
                </div>
                <a
                  onClick={onSubmit}
                  className={[
                    style.btn,
                    style.btn_white,
                    style.btn_block,
                    style.horizontal_center,
                    style.tx_semibold,
                  ].join(" ")}
                  style={{
                    maxWidth: "210px",
                    marginTop: "20px",
                    fontWeight: 600,
                  }}
                >
                  Masuk dengan email
                </a>
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                  Belum punya akun?
                  <a className={style.tx_bold} href="">
                    {" "}
                    Daftar Sekarang
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
