import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button';


export function Error(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h2 className="error__title">Error</h2>
      <p className="error__message">message</p>
      <div>
        <Button
          text="OK"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
    </div>
  );
}
