import DashBoardHeader from "@/components/molecules/DashBoardHeader";
import Typography from "@/components/atoms/Typography";
import ProgressBar from "@/components/atoms/ProgressBar";
import SummaryItem from "@/components/molecules/SummaryItem";
import { color } from "@/lib/constants/colors";
import { mockDashboardData as data } from "@/lib/data/dashboardData";
import TaskList from "../../../../components/atoms/tasklist/tasklist";
import RoleManage from "@/components/atoms/roleList/roleList";

const Page = () => {
    const tasks = [
        {
            title: "Assign roles for 2 new Members",
            category: "Roles",
            due: "Due Today",
            dueColor: "text-red-600"
        },
        {
            title: "Adding eid Working hours",
            category: "CMS",
            due: "Due Tomorrow",
            dueColor: "text-yellow-500"
        },
        {
            title: "Upload 3 new videos",
            category: "Video",
            due: "Due 17 Oct",
            dueColor: "text-green-600"
        },
        {
            title: "Add a new Task",
            isAdd: true
        }
    ];
    return (
        <>
            <DashBoardHeader therapyName={data.therapyName} nav={false} />
            <main className="w-full h-full flex flex-col gap-6 p-4 md:p-8 overflow-y-auto custom-scrollbar">
                {/* Welcome Section */}
                <div className="flex flex-row gap-2 justify-between w-full items-center">
                    <Typography text="CMS" variant="heading1" style={{
                        color: color.secondary,
                        fontWeight: "bold",
                        fontSize: "45px"
                    }} />                
                </div>
                <div className="flex flex-row gap-4 w-full">
                    <RoleManage title="Doctor/staff Name" major="Doctors" count={3} />
                </div>                            

            </main>
        </>
    );
};

export default Page;
