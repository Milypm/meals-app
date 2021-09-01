import FadeLoader from 'react-spinners/FadeLoader';
import { css } from '@emotion/react';
import '../styles/home.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Loading = () => {
  const loading = true;
  return (
    <div className="loading-div">
      <h3>Loading</h3>
      <FadeLoader color="rgb(219, 135, 96)" loading={loading} css={override} size={850} />
    </div>
  );
};
export const Error = () => (
  <div className="error-div">
    <h3>Sorry, we couldn&apos;t display the information :( Try again please</h3>
  </div>
);
