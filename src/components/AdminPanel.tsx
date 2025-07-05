import {AdminPanelImage} from "../assets/images"
import Button from './common/Button';

function AdminPanel() {
    return (
        <section className="bg-gradient-to-b from-white via-orange-50 to-white lg:max-h-[500px] p-10 mt-10 space-y-20 ">
            <div className="lg:w-10/12 mx-auto">

              <div
            className={`flex flex-col-reverse md:flex-row items-center justify-between gap-16  font-ruberoid w-full `}
        >
            <div className="w-full lg:w-1/2 flex flex-col items-stretch">
                <img src={AdminPanelImage} alt={"Admin Panel"} className="" />
                <Button className='w-full md:hidden py-6 mt-10 !text-lg sm:w-auto'/>
            </div>
            <div className="w-full flex flex-col gap-1 lg:w-1/2 text-left">
                <p className="text-lg font-semibold text-secondary mb-2">
                    Admin Panel
                </p>
                <h2 className="text-4xl font-semibold text-primary mb-4 leading-12">
                    Your Control Center
                </h2>
                <p className="text-black text-base font-normal ">Manage user roles, registration flows, content schedules, comms, booth zones, analytics, and more — all from one powerful dashboard. Granular access permissions included.</p>
                <div className='hidden md:block mt-2'>
                    <Button />
                </div>
            </div>
        </div>

              
            </div>
        </section>
    );
}

export default AdminPanel;
