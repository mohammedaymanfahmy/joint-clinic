import "./roleList.css"

interface TaskItem {
    title: string;
    major: string;
    count: number;
}

interface TaskListProps {
    title: string;
    major: string;
    count: number;
}
// if type is "roles" then show and props will use is count and major
export default function RoleManage({ title, major, count }: TaskListProps) {
    return (
        <div className="w-full bg-transparent">
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className={`
            flex items-center justify-between 
            w-full h-[50px] px-4 rounded-full mb-2 bg-[#eff6ff]           
          `}
                >
                    {/* Left: Checkbox + Title */}
                    <div className="flex items-center gap-3">
                        <div
                            className={`
                w-4 h-4 rounded-full border border-blue-500
              `}
                        ></div>

                        <span
                            className={`text-blue-900 font-medium text-[20px]`}
                        >
                            {title}
                        </span>
                    </div>

                    {/* Right Section (Category + Due) */}

                    <div className="flex items-center gap-8 text-sm w-[20%]">

                        <div className="relative flex items-center w-[70%] justify-center gap-8 text-sm w-[50%]">
                            <span className="majorLeft"></span>

                            {/* 🆕 categoryColor & textSize بديفولت */}
                            <span className={`font-medium cursor-pointer text-center text-[22px] text-[#3869a5]`}>
                                {major}
                            </span>

                            <span className="majorRight"></span>
                        </div>

                        <div className="flex items-center justify-center gap-8 text-sm w-[50%]">
                            {/* 🆕 dueColor & textSize */}
                            <span className={`font-medium cursor-pointer text-center text-[22px] text-[#ee3124] underline`}>
                                Edit
                            </span>
                        </div>
                        {/* Add New Task Row */}

                        <div className="flex items-center text-blue-700 font-medium">
                            <span className="text-xl mr-2 cursor-pointer">+</span>
                        </div>
                    </div>



                </div>
            ))}
        </div>
    );
}
