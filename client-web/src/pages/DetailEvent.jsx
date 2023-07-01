export default function DetailEvent() {
  return (
    <div className="max-w-screen-xl mx-auto h-screen">
      <div className="flex">
        <div className="max-w-sm w-2/6 h-96 bg-white border border-gray-200 rounded-lg shadow my-5 sticky top-32">
          <div className="p-5 h-96 flex flex-col justify-between">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Event Name
              </h5>
              <p className="my-3 font-normal text-blue-900">
                <span className="p-2 border border-blue-900 rounded-md">
                  <span className="mr-2">Logo</span>
                  Categoryname
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-400">
                Start Date - End Date
              </p>
              <p className="mb-3 font-normal text-gray-400">Location</p>
              <ul className="flex gap-4">
                <li>Benefit</li>
                <li>Benefit</li>
                <li>Benefit</li>
              </ul>
              <p className="mb-3 font-normal text-gray-400">
                Registration end date
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
          <img
            src="https://akcdn.detik.net.id/api/wm/2023/05/09/coldplay_169.jpeg"
            alt=""
          />
          <p>
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet itaque deserunt repellendus harum repellat, velit
            enim! Dolorem expedita quae aut veniam sapiente, vero, maxime,
            consequatur magnam facilis ea temporibus! Vitae beatae eaque alias
            suscipit harum eum dignissimos eveniet soluta libero? Non,
            necessitatibus voluptate. Officia odio molestiae, similique expedita
            aliquam porro ratione facilis ea, exercitationem fugiat, dolorem
            quam deleniti dolorum. Eos ducimus, iste nemo natus tempore eveniet
            est repellat, dolores odio voluptas neque veniam impedit.
            Perferendis consequuntur enim quibusdam debitis inventore a porro,
            eveniet tenetur illo libero voluptas maxime voluptatem. Fugit,
            ratione optio adipisci expedita mollitia blanditiis repudiandae
            similique est commodi alias vel autem nisi ullam eligendi
            praesentium dolore hic eos aut reprehenderit earum delectus, nam
            assumenda suscipit excepturi. Reprehenderit. Deleniti ab animi
            praesentium placeat itaque. Iste, odit. Repellendus hic placeat
            ipsum assumenda optio error itaque vel debitis. Tenetur eius
            asperiores illo, accusantium cupiditate animi accusamus vitae at
            similique pariatur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro sed dolorum, cum exercitationem architecto
            corporis quisquam aperiam vero, iusto ipsam, similique id vel fugit
            repellat repellendus itaque fugiat omnis libero.
          </p>
        </div>
      </div>
    </div>
  );
}
