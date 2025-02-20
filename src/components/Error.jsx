

const Error = ({msg}) => {
  return (
    <div className="loadderwrappar ">
        <div className="error">
          <h3>Üzgünüz bir hata oluştu</h3>

          <p>{msg}</p>
        </div>
    </div>
  )
};

export default Error;