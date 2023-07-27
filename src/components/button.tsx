interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => console.log("primary")}
      >
        Primary
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => console.log("secondary")}
      >
        Secondary
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => console.log("success")}
      >
        Success
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => console.log("danger")}
      >
        Danger
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => console.log("warning")}
      >
        Warning
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => console.log("info")}
      >
        Info
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => console.log("light")}
      >
        Light
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => console.log("dark")}
      >
        Dark
      </button>

      <button
        type="button"
        className="btn btn-link"
        onClick={() => console.log("link")}
      >
        Link
      </button>
    </>
  );
};

export default Button;
