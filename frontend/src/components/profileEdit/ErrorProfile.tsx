
interface ErrorProfileProps {
  error: string;
}

export const ErrorProfile = ({error} : ErrorProfileProps) => {
  return (
    <div className="alert alert-danger py-2 mb-3"
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.85rem",
      }}
    >
      {error}
    </div>
  )
};