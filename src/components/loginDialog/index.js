import { h } from "preact";
import style from "./style.css";

import myITSlogo from "../../assets/logo.png";

const LoginDialog = () => (
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
                <input type="email" className={style.form_control} />
              </div>
              <div className={style.form_group}>
                <h5 className={style.form_title}>Password</h5>
                <input type="password" className={style.form_control} />
              </div>
              <a
                href="beranda-perusahaan.html"
                // className="btn btn-white btn-block horizontal-center tx-semibold"
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

export default LoginDialog;
