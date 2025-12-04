import "./tasklist.css"

interface TaskItem {
  title: string;
  category?: string;
  due?: string;
  dueColor?: string;
  categoryColor?: string;   // 🆕 لون الكاتيجوري
  textSize?: string;        // 🆕 حجم النص للطرفين
  isAdd?: boolean;
  type?: string;
  count?: number;
  major?: string;
}

interface TaskListProps {
  taskItems: TaskItem[];
}
 // if type is "roles" then show and props will use is count and major
export default function TaskList({ taskItems }: TaskListProps) {
  return (
    <div className="w-full bg-transparent">
      {taskItems.map((task, i) => (
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
              className={`text-blue-900 font-medium text-[20px] ${
                task.isAdd ? "text-blue-700" : ""
              }`}
            >
              {task.title}
            </span>
          </div>

          {/* Right Section (Category + Due) */}
          {!task.isAdd && (
            <div className="flex items-center gap-8 text-sm w-[25%]">

              <div className="relative flex items-center justify-center gap-8 text-sm w-[50%]">
                <span className="taskcategoryleft"></span>

                {/* 🆕 categoryColor & textSize بديفولت */}
                <span className={`${task.categoryColor ?? "text-blue-900"} font-medium ${task.textSize ?? "text-[22px]"} text-center`}>
                  {task.category}
                </span>

                <span className="taskcategoryright"></span>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm w-[50%]">
                {/* 🆕 dueColor & textSize */}
                <span className={`${task.dueColor ?? "text-[#F6A500]"} font-medium ${task.textSize ?? "text-[22px]"} text-center`}>
                  {task.due}
                </span>
              </div>
            </div>
          )}

          {/* Add New Task Row */}
          {task.isAdd && (
            <div className="flex items-center text-blue-700 font-medium">
              <span className="text-xl mr-2">+</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
