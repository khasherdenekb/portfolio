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
      data: "2",
      desc: "competitive coding awards",
    },
  ];

  return (
    <div className="hidden md:flex flex-col md:flex-row gap-10 mx-auto max-w-6xl w-screen py-12 sm:px-6 md:py-16 px-10 xl:px-0">
      {stats.map((item, key) => {
        return (
          <div key={key} className="mt-8 sm:mt-12 gap-5 w-full ">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
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
