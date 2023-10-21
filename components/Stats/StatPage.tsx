const StatPage = () => {
  const stats = [
    {
      data: "400+",
      desc: "leetcode problem solving",
    },
    {
      data: "10+",
      desc: "Project completed",
    },
    {
      data: "3",
      desc: "competitive coding awards",
    },
  ];

  return (
    <div className="flex-col hidden w-screen max-w-6xl gap-10 px-10 py-12 mx-auto md:flex md:flex-row sm:px-6 md:py-16 xl:px-0">
      {stats.map((item, key) => {
        return (
          <div key={key} className="w-full gap-5 mt-8 sm:mt-12 ">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                <dt className="order-last text-lg font-medium text-[14px]">
                  {item.desc}
                </dt>

                <dd className="text-2xl font-extrabold text-blue-600 md:text-5xl">
                  {item.data}
                </dd>
              </div>
            </dl>
          </div>
        );
      })}
    </div>
  );
};
export default StatPage;
