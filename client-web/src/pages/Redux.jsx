import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/slices/counter";
import { fetchData } from "../store/actions/eventAction";

export default function HomePage() {
  const { value, data } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <button
          className="p-5 bg-blue-400 rounded-md mx-5"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          className="p-5 bg-red-400 rounded-md mx-5"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="my-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(incrementByAmount(+e.target[0].value));
          }}
        >
          <input type="number" className="border border-slate-600" />
          <button
            className="p-5 bg-red-400 rounded-md mx-5"
            aria-label="Decrement value"
          >
            Submit
          </button>
        </form>
      </div>
      {data && data.map((e, i) => <p key={i}>{e.name}</p>)}
    </div>
  );
}
