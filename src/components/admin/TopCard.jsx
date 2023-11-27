import React from "react";
import student from "../../assets/student.png";
import teacher from "../../assets/teacher.png";
import course from "../../assets/img2.png";
import blog from "../../assets/blog.png";
function TopCard() {
  const cards = [
    {
      title: "Students",
      logo: student,
      count: 5505,
    },
    {
      title: "Teachers",
      logo: teacher,
      count: "10+",
    },
    {
      title: "Courses",
      logo: course,
      count: "45+",
    },
    {
      title: "Blog",
      logo: blog,
      count: "95+",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 cursor-pointer">
      {cards &&
        cards.map((card, i) => (
          <div
            className="flex max-w-full overflow-hidden  items-center p-6 justify-between bg-white rounded-lg gap-2 shadow-md"
            key={i}
          >
            <div>
              <h2 className="text-[14px] text-[#808191] font-medium uppercase">
                {card.title}
              </h2>
              <h1 className="text-xl font-bold">{card.count}</h1>
            </div>
            <div>
              <img src={card.logo} alt="" className="w-14 h-14" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default TopCard;
