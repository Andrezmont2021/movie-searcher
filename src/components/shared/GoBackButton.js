export default function GoBackButton() {
  const _goBack = () => {
    window.history.back();
  };
  return <button onClick={_goBack}>Go Back</button>;
}
