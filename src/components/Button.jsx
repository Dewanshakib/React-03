import "./Button.css";


export const Button = () => {
  return (
    <div className="Button_div">
      <button className="btn-1">
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"></a>
        <i class="fa fa-envelope"></i>
        Email
      </button>
      <button className="btn-2">
        <a href="https://bd.linkedin.com/" target="_blank"></a>
        <i class="fa fa-linkedin-square"></i>
        LinkedIn
      </button>
    </div>
  );
};
