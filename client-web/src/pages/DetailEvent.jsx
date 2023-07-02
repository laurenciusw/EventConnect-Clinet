import { useDispatch, useSelector } from "react-redux";
import { fetchDataById } from "../store/actions/eventAction";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function DetailEvent() {
  const { event } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDataById(id));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto h-screen">
      <div className="flex ">
        <div className="max-w-sm w-2/6 h-full bg-white border border-gray-200 rounded-lg shadow my-5 sticky top-32">
          <div className="p-5 flex flex-col justify-between">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {event?.name}
              </h5>
              <h5 className="mb-2 text-lg font-normal tracking-wide text-gray-900 ">
                By {event?.Organizer.organizerName}
              </h5>
              <p className="my-3 font-normal text-blue-900">
                <span className="p-2 border border-blue-900 rounded-md">
                  <span className="mr-2">Logo</span>
                  {event?.category}
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-400">
                {event?.startDate} until {event?.endDate}
              </p>
              <p className="mb-3 font-normal text-gray-400">
                {event?.location}
              </p>
              <p className="font-normal text-gray-400">
                Benefit that you'll get:
              </p>
              <ul className="flex gap-4 flex-wrap mb-3">
                {event?.Benefits &&
                  event.Benefits.map((e) => <li key={e.id}>{e.name}</li>)}
                <li>Test Benefit</li>
              </ul>
              <p className="mb-3 font-normal text-gray-400">
                Registration end date: {event?.registrationDate}
              </p>
            </div>
            <div>
              <h1>MAP</h1>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-900 w-full rounded-md text-white">
                Join Volunteer
              </button>
            </div>
          </div>
        </div>
        <div className="w-4/6 mx-auto mt-5">
          <img src={event?.imageUrl} alt="" className="w-full" />
          <p className="tracking-wider leading-relaxed">{event?.description}</p>
          <p className="tracking-wider leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolorum beatae officia rem amet adipisci, quaerat quod commodi
            magnam cumque inventore non dolores architecto porro voluptate,
            corrupti ipsa veritatis maiores. Explicabo aliquid molestiae
            blanditiis asperiores quos! Nemo, quos. Cum voluptates totam laborum
            consequatur suscipit, voluptatum praesentium ducimus molestias eum
            eveniet doloribus beatae quaerat asperiores odio delectus culpa,
            natus aliquid voluptatibus? Veritatis sapiente cupiditate fuga ex
            perspiciatis voluptas consectetur, mollitia delectus recusandae
            quidem, provident culpa accusantium ad ab laboriosam molestiae, ea
            ut maxime veniam tempore. Fugit ex quam dolore animi quia!
            Voluptates, ex accusantium nulla odit necessitatibus officiis, eaque
            sint reiciendis cum laudantium tempore fugit. Aut labore odit
            eveniet incidunt iure culpa. Dolorem doloremque cupiditate
            laudantium quidem blanditiis officiis, placeat laborum. Aliquam
            velit repellat laborum, officia sint in rerum, accusamus
            voluptatibus libero deserunt ipsum minima itaque maiores voluptate,
            nihil numquam quam aut corrupti? Cum quisquam voluptate eligendi
            ullam eos ut laborum. Rerum quisquam unde facere et minima vero
            voluptatem? Temporibus dolore accusantium porro praesentium nostrum
            a voluptate quia consequatur culpa sit! Quasi assumenda deserunt qui
            nulla natus, labore cum ut optio? Quia, delectus. Esse sapiente
            deserunt voluptatum rem perspiciatis doloribus? Ipsam nam, commodi
            autem qui, iste magni modi est in, eaque nemo nostrum fugiat.
            Inventore maiores, omnis facere sequi autem perferendis? Aut cumque
            necessitatibus sint officia aliquam ipsam vero quam beatae itaque
            illo architecto magni ducimus alias reprehenderit, eveniet corporis
            culpa aliquid. Perspiciatis ullam quia molestias enim veritatis
            nihil labore maiores! Ducimus ullam possimus laudantium, saepe
            voluptate vel officia voluptatibus, nesciunt, modi natus vero magnam
            non autem tempore? Sint eos veniam accusamus esse? Iusto, porro unde
            eligendi perspiciatis optio maxime facilis? Sed amet, dolore ex
            nesciunt aperiam ipsa! Eius ex dolore corrupti hic in culpa
            perferendis illo enim eos nisi, voluptatibus dolores nihil ipsum
            facere ea assumenda vero error distinctio dicta.
          </p>
        </div>
      </div>
    </div>
  );
}
