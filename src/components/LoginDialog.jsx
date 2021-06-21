import { h } from "preact";
import { useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/actions";

//assets import
import "../styles/LoginDialog.css";
import myITSlogo from "../assets/img/logo.png";
import { getNews } from "../store/news/actions";

export default function LoginDialog() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  console.log(authState);

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const enterVRMode = () => {
    var scene = document.querySelector("a-scene");
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener("loaded", function () {
        setTimeout(function () {
          scene.enterVR();
        }, 1000);
      });
    }
  };

  const onSubmit = (e) => {
    const body = {
      email: emailField,
      password: passwordField,
    };
    dispatch(login(body));
    e.preventDefault();
  };

  return (
    <div
      className="modal fade effect_scale show"
      id="modalLogin"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{ paddingRight: "15px", display: "block" }}
    >
      <div className="modal_dialog modal_dialog_centered" role="document">
        <div className="modal_content">
          <div className="modal_body" style={{ padding: "30px" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{ marginBottom: "25px", width: "20%" }}
                src={myITSlogo}
                className="img_fluid"
                alt=""
              />
            </div>

            <div style={{ display: "flex" }}>
              <div className="flex_fill">
                <div className="form_group">
                  <h5 className="form_title">Email</h5>
                  <input
                    type="email"
                    className="form_control"
                    onInput={(e) => setEmailField(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <h5 className="form_title">Password</h5>
                  <input
                    type="password"
                    className="form_control"
                    onInput={(e) => setPasswordField(e.target.value)}
                  />
                </div>
                <a
                  onClick={onSubmit}
                  className="btn btn_whitebtn_block horizontal_center tx_semibold"
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
                  <a className="tx_bold" href="">
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
}
