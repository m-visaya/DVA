import { useEffect } from "react";

function Snackbar(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setSnackVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute bottom-0 right-0 m-4 place rounded-xl bg-sky-100 text-sky-800 text-[10pt] px-6 py-4 z-10">
      { props.text }
    </div>
  );
}

export default Snackbar;
